class Node {
  constructor(value) {
    this.value = value;
    this.next = null;
    this.color = this.randomColor();
  }
  randomColor() {
    const colors = [
      "#FF6B6B",
      "#4ECDC4",
      "#45B7D1",
      "#96CEB4",
      "#FFEAA7",
      "#6C5CE7",
    ];
    return colors[Math.floor(Math.random() * colors.length)];
  }
}

class LinkedList {
  constructor() {
    this.head = null;
    this.size = 0;
  }
  addFirst(value) {
    const node = new Node(value);
    node.next = this.head;
    this.head = node;
    this.size++;
  }
  addLast(value) {
    const node = new Node(value);
    if (!this.head) {
      this.head = node;
    } else {
      let current = this.head;
      while (current.next) current = current.next;
      current.next = node;
    }
    this.size++;
  }
  addAtIndex(index, value) {
    if (index < 0 || index > this.size) return alert("Invalid index!");
    if (index === 0) return this.addFirst(value);
    if (index === this.size) return this.addLast(value);

    const node = new Node(value);
    let current = this.head;
    let prev = null;
    let i = 0;
    while (i < index) {
      prev = current;
      current = current.next;
      i++;
    }
    node.next = current;
    prev.next = node;
    this.size++;
  }
  removeFirst() {
    if (!this.head) return null;
    this.head = this.head.next;
    this.size--;
  }
  removeLast() {
    if (!this.head) return null;
    if (!this.head.next) {
      this.head = null;
      this.size--;
      return;
    }
    let current = this.head;
    while (current.next.next) current = current.next;
    current.next = null;
    this.size--;
  }
  reverse() {
    let prev = null,
      current = this.head;
    while (current) {
      let next = current.next;
      current.next = prev;
      prev = current;
      current = next;
    }
    this.head = prev;
  }
  clear() {
    this.head = null;
    this.size = 0;
  }
  getTail() {
    if (!this.head) return null;
    let current = this.head;
    while (current.next) current = current.next;
    return current.value;
  }
}

const list = new LinkedList();

function addFirst() {
  const value = document.getElementById("value").value;
  if (!value) return alert("Enter a value");
  list.addFirst(parseInt(value));
  document.getElementById("value").value = "";
  draw();
}

function addLast() {
  const value = document.getElementById("value").value;
  if (!value) return alert("Enter a value");
  list.addLast(parseInt(value));
  document.getElementById("value").value = "";
  draw();
}

function addAtIndex() {
  const value = document.getElementById("value").value;
  const index = document.getElementById("index").value;
  if (!value || index === "") return alert("Enter value and index");
  list.addAtIndex(parseInt(index), parseInt(value));
  document.getElementById("value").value = "";
  document.getElementById("index").value = "";
  draw();
}

function removeFirst() {
  if (list.size === 0) return alert("List is empty");
  list.removeFirst();
  draw();
}

function removeLast() {
  if (list.size === 0) return alert("List is empty");
  list.removeLast();
  draw();
}

function reverse() {
  if (list.size === 0) return alert("List is empty");
  list.reverse();
  draw();
}

function clearList() {
  list.clear();
  draw();
}

function draw() {
  const viz = document.getElementById("viz");
  viz.innerHTML = "";
  if (!list.head) {
    viz.innerHTML = '<div class="empty">Empty list - add some nodes!</div>';
    updateInfo();
    return;
  }
  const container = document.createElement("div");
  container.className = "list-container";
  let current = list.head,
    index = 0;
  while (current) {
    const nodeDiv = document.createElement("div");
    nodeDiv.className = "node";
    const box = document.createElement("div");
    box.className = "node-box";
    box.style.backgroundColor = current.color;
    box.textContent = current.value;
    const idx = document.createElement("div");
    idx.className = "node-index";
    idx.textContent = index;
    box.appendChild(idx);
    nodeDiv.appendChild(box);
    if (current.next) {
      const arrow = document.createElement("span");
      arrow.className = "arrow";
      arrow.textContent = "→";
      nodeDiv.appendChild(arrow);
    }
    container.appendChild(nodeDiv);
    current = current.next;
    index++;
  }
  const nullDiv = document.createElement("div");
  nullDiv.className = "null";
  nullDiv.textContent = "NULL";
  container.appendChild(nullDiv);
  viz.appendChild(container);
  updateInfo();
}

function updateInfo() {
  document.getElementById("size").textContent = list.size;
  document.getElementById("head").textContent = list.head
    ? list.head.value
    : "null";
  document.getElementById("tail").textContent = list.head
    ? list.getTail()
    : "null";
}
