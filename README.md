# React + Vite To-Do Application

This project is a simple To-Do application built using React and Vite. You can add, mark as done, and delete to-do items.

## Getting Started

### Prerequisites

- Install [Node.js](https://nodejs.org/) (v14 or higher)
- Install npm (comes with Node.js) or [yarn](https://yarnpkg.com/)

### Installation

1. Clone the repository:

   ```sh
   git clone https://github.com/your-username/your-repo.git
   cd your-repo
   ```

2. Install the required packages:
   ```sh
   npm install
   # or
   yarn install
   ```

### Running the Application

To start the development server:

```sh
npm run dev
# or
yarn dev
```

Open your browser and go to `http://localhost:5173`.

### Project Structure

- `src/`: Contains the source code.
  - `components/`: Reusable components like `TodoCard` and `DeleteConfirmation`.
  - `context/`: Context providers for managing state.
  - `sections/`: Larger sections of the app like `AddToDoForm`.
  - `App.jsx`: The main app component.
  - `main.jsx`: Entry point of the app.

### Key Features

- **Add To-Do**: Add new to-do items.
- **Mark as Done**: Mark to-do items as done or undo them.
- **Delete To-Do**: Delete to-do items with a confirmation prompt.

### Dependencies

- React
- Vite
- Framer Motion/Motion (for animations)
- Tailwind CSS (for styling)

### Contributing

1. Fork the repository.
2. Create a new branch (`git checkout -b feature-branch`).
3. Make your changes.
4. Commit your changes (`git commit -m 'Add some feature'`).
5. Push to the branch (`git push origin feature-branch`).
6. Open a pull request.
