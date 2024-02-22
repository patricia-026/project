export default function ProjectForm() {
    return (
        <div className="pt-24 px-12">
            <h1 className="text-2xl text-center m-5">Project Form</h1>
            <div className="overflow-hidden rounded-lg border border-gray-200 shadow-md max-w-lg p-8 mx-auto">
                <form>
                    <div className="mb-4">
                        <label
                            htmlFor="name"
                            className="block text-gray-700 text-sm font-semibold mb-2"
                        >
                            Name
                        </label>
                        <input
                            type="text"
                            id="name"
                            className="form-input w-full px-4 py-2 border rounded-lg text-gray-700 focus:ring-blue-500"
                            required
                            placeholder="Project Name"
                        />
                    </div>
                    <div className="mb-4">
                        <label
                            htmlFor="description"
                            className="block text-gray-700 text-sm font-semibold mb-2"
                        >
                            Description
                        </label>
                        <input
                            type="text"
                            id="description"
                            className="form-input w-full px-4 py-2 border rounded-lg text-gray-700 focus:ring-blue-500"
                            required
                            placeholder="Description..."
                        />
                    </div>
                    <div className="mb-4">
                        <label
                            htmlFor="status"
                            className="block text-gray-700 text-sm font-semibold mb-2"
                        >
                            Status
                        </label>
                        <select
                            name="select"
                            id="select"
                            className="w-full px-4 py-2 border rounded-lg text-gray-700 focus:ring-blue-500"
                        >
                            <option value="1">Fejlesztésre vár</option>
                            <option value="2">Folyamatban</option>
                            <option value="3">Kész</option>
                        </select>
                    </div>
                    <div className="my-8">
                        <label className="block text-gray-700 text-sm font-semibold">
                            Contacts
                        </label>
                    </div>

                    <div className="mb-4">
                        <label
                            htmlFor="contactName"
                            className="block text-gray-700 text-sm font-semibold mb-2"
                        >
                            Name
                        </label>
                        <input
                            type="text"
                            id="contactName"
                            className="form-input w-full px-4 py-2 border rounded-lg text-gray-700 focus:ring-blue-500"
                            required
                            placeholder="Contact Name"
                        />
                    </div>
                    <div className="mb-4">
                        <label
                            htmlFor="email"
                            className="block text-gray-700 text-sm font-semibold mb-2"
                        >
                            Email
                        </label>
                        <input
                            type="email"
                            id="email"
                            className="form-input w-full px-4 py-2 border rounded-lg text-gray-700 focus:ring-blue-500"
                            required
                            placeholder="mail@mail.com"
                        />
                    </div>

                    <button className="mt-8">OK</button>
                </form>
            </div>
        </div>
    );
}
