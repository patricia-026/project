<?php

namespace Database\Seeders;

// use Illuminate\Database\Console\Seeds\WithoutModelEvents;

use App\Models\Contact;
use App\Models\Project;
use Illuminate\Database\Seeder;

class DatabaseSeeder extends Seeder
{
    /**
     * Seed the application's database.
     */
    public function run(): void
    {
        // \App\Models\User::factory(10)->create();

        // \App\Models\User::factory()->create([
        //     'name' => 'Test User',
        //     'email' => 'test@example.com',
        // ]);

        Project::factory(40)->create();
        Contact::factory(20)->create();

        $contact1 = Contact::find(1);
        $contact2 = Contact::find(2);

        foreach (Project::all() as $project) {
            $project->contacts()->attach($contact1->id);
            $project->contacts()->attach($contact2->id);
        }
    }
}
