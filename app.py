# app.py
from flask import Flask, render_template, jsonify, request

app = Flask(__name__)

# --- Sample Algorithm Data (KEEP THIS AS IS from last time) ---
algorithms_data = {
    "bubble_sort": {
        "name": "Bubble Sort",
        "description": "A simple sorting algorithm that repeatedly steps through the list, compares adjacent elements and swaps them if they are in the wrong order.",
        "steps_example": [
            "Start with an unsorted array.",
            "Compare adjacent elements.",
            "Swap if out of order.",
            "Repeat until no swaps are needed."
        ],
        "category": "Algorithm"
    },
    "binary_search_tree": {
        "name": "Binary Search Tree",
        "description": "A node-based binary tree data structure which has the following properties: The left subtree of a node contains only nodes with keys lesser than the node’s key. The right subtree of a node contains only nodes with keys greater than the node’s key. Both the left and right subtrees must also be binary search trees.",
        "properties": [
            "Left child < Parent",
            "Right child > Parent",
            "No duplicate keys"
        ],
        "category": "Data Structure"
    },
    "quick_sort": {
        "name": "Quick Sort",
        "description": "An efficient, in-place sorting algorithm. It picks an element as a pivot and partitions the given array around the picked pivot.",
        "category": "Sorting",
        "steps_example": [
            "Choose a pivot element.",
            "Partition the array around the pivot.",
            "Recursively apply quicksort to the sub-arrays."
        ],
        "category": "Algorithm"
    },
    "linked_list": {
        "name": "Linked List",
        "description": "A linear data structure where elements are not stored at contiguous memory locations but are linked using pointers.",
        "category": "Data Structure",
        "types": [
            "Singly Linked List",
            "Doubly Linked List",
            "Circular Linked List"
        ]
    },
    "merge_sort": {
        "name": "Merge Sort",
        "description": "A divide and conquer algorithm. It divides the input array into two halves, calls itself for the two halves, and then merges the two sorted halves.",
        "category": "Sorting",
        "steps_example": [
            "Divide the unsorted list into n sublists, each containing one element.",
            "Repeatedly merge sublists to produce new sorted sublists until there is only one sublist remaining."
        ],
        "category": "Algorithm"
    },
    "hash_table": {
        "name": "Hash Table",
        "description": "A data structure that implements an associative array abstract data type, a structure that can map keys to values. A hash table uses a hash function to compute an index into an array of buckets or slots, from which the desired value can be found.",
        "category": "Data Structure",
        "properties": [
            "Key-value pairs",
            "Uses hash function for mapping"
        ]
    },
    "stack": {
        "name": "Stack",
        "description": "A linear data structure that follows the Last In, First Out (LIFO) principle. Elements can only be added or removed from the top.",
        "category": "Data Structure",
        "operations": [
            "Push (add element)",
            "Pop (remove element)",
            "Peek (view top element)"
        ]
    },
    "queue": {
        "name": "Queue",
        "description": "A linear data structure that follows the First In, First Out (FIFO) principle. Elements are added to the rear and removed from the front.",
        "category": "Data Structure",
        "operations": [
            "Enqueue (add element)",
            "Dequeue (remove element)",
            "Front (view front element)",
            "Rear (view rear element)"
        ]
    },
    "depth_first_search": {
        "name": "Depth-First Search (DFS)",
        "description": "An algorithm for traversing or searching tree or graph data structures. It starts at the root (or arbitrary node) and explores as far as possible along each branch before backtracking.",
        "category": "Graph Traversal",
        "application": "Finding connected components, topological sorting"
    },
    "breadth_first_search": {
        "name": "Breadth-First Search (BFS)",
        "description": "An algorithm for traversing or searching tree or graph data structures. It starts at the tree root (or some arbitrary node, sometimes referred to as a 'search key') and explores all of the neighbor nodes at the present depth before moving on to the nodes at the next depth level.",
        "category": "Graph Traversal",
        "application": "Shortest path in unweighted graph"
    },
    "heap": {
        "name": "Heap",
        "description": "A specialized tree-based data structure that satisfies the heap property. In a max-heap, for any given node C, if P is a parent node of C, then the key (the value) of P is greater than or equal to the key of C. In a min-heap, the key of P is less than or equal to the key of C.",
        "category": "Data Structure",
        "types": [
            "Min-Heap",
            "Max-Heap"
        ]
    },
    "dijkstra_algorithm": {
        "name": "Dijkstra's Algorithm",
        "description": "An algorithm for finding the shortest paths between nodes in a graph, which may represent, for example, road networks. It works for both directed and undirected graphs.",
        "category": "Graph Algorithm",
        "application": "Shortest path in weighted graph (non-negative weights)"
    }
}
# -----------------------------------------------------------------------------

@app.route('/')
def home():
    """
    Renders the main page. We'll pass the ENTIRE algorithms_data dictionary
    to the frontend so Jinja2 can build your cards.
    """
    return render_template('index.html', algorithms_data=algorithms_data) # Pass the whole dict

@app.route('/get_algorithm/<algo_name>', methods=['GET'])
def get_algorithm_details(algo_name):
    """
    API endpoint to return details for a specific algorithm/data structure as JSON.
    This remains the same as it's the API for fetching details.
    """
    algo_details = algorithms_data.get(algo_name)
    if algo_details:
        return jsonify(algo_details)
    else:
        return jsonify({"error": "Algorithm or data structure not found"}), 404

if __name__ == '__main__':
    app.run(debug=True)