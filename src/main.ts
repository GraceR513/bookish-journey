import './style.css'
import { setupCounter } from './counter.ts'
import './vite.svg'

document.querySelector<HTMLDivElement>('#app')!.innerHTML = `
<body class="bg-light">

  <div class="container mt-5">
    <h1 class="text-center mb-4">📚 Book Tracker</h1>

    <form id="book-form" class="mb-4">
      <div class="mb-3">
        <input type="text" id="title" class="form-control" placeholder="Book Title" required />
      </div>
      <div class="mb-3">
        <input type="text" id="author" class="form-control" placeholder="Author" required />
      </div>
      <button type="submit" class="btn btn-primary">Add Book</button>
    </form>

    <ul id="book-list" class="list-group"></ul>
  </div>

  <script src="app.js"></script>
</body>
`

setupCounter(document.querySelector<HTMLButtonElement>('#counter')!)
