<?php

namespace App\Http\Controllers;

use App\Models\Contact;
use App\Models\Project;
use App\Http\Requests\StoreProjectRequest;
use App\Http\Requests\UpdateProjectRequest;
use App\Http\Resources\ProjectResource;

class ProjectController extends Controller
{
    /**
     * Display a listing of the resource.
     */
    public function index()
    {
        return ProjectResource::collection(Project::query()->paginate(10));
    }

    /**
     * Store a newly created resource in storage.
     */
    public function store(StoreProjectRequest $request)
    {
        $data = $request->validated();

        $project = Project::create([
            'name' => $data['name'],
            'description' => $data['description'],
            'status' => $data['status'],
        ]);

        foreach ($data['contacts'] as $contactData) {
            $contact = Contact::firstOrCreate([
                'name' => $contactData['name'],
                'email' => $contactData['email'],
            ]);
            $project->contacts()->attach($contact);
        }

        return response([new ProjectResource($project), 201]);
    }

    /**
     * Display the specified resource.
     */
    public function show(Project $project)
    {
        return new ProjectResource($project);
    }

    /**
     * Update the specified resource in storage.
     */
    public function update(UpdateProjectRequest $request, Project $project)
    {
        $data = $request->validated();

        $project->update([
            'name' => $data['name'],
            'status' => $data['status'],
            'description' => $data['description'],
        ]);

        $project->contacts()->detach();

        foreach ($data['contacts'] as $contactData) {
            $contact = Contact::firstOrCreate([
                'name' => $contactData['name'],
                'email' => $contactData['email'],
            ]);
            $project->contacts()->attach($contact);
        }

        return new ProjectResource($project);
    }

    /**
     * Remove the specified resource from storage.
     */
    public function destroy(Project $project)
    {
        $project->contacts()->detach();
        $project->delete();

        return response("", 204);
    }
}
