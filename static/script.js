function visualizeDataStructure(type) {
    // Add a smooth click animation
    event.target.style.transform = 'scale(0.95)';
    setTimeout(() => {
        event.target.style.transform = 'scale(1)';
    }, 150);
    
    // Simulate navigation to visualization
    setTimeout(() => {
        alert(`Opening ${type} visualization...`);
        // In a real application, you would navigate to the specific visualization page
        // window.location.href = `visualize.html?type=${type}`;
    }, 200);
}

function visualizeAlgorithm(type) {
    // Add a smooth click animation
    event.target.style.transform = 'scale(0.95)';
    setTimeout(() => {
        event.target.style.transform = 'scale(1)';
    }, 150);
    
    // Simulate navigation to visualization
    setTimeout(() => {
        alert(`Opening ${type} visualization...`);
        // In a real application, you would navigate to the specific visualization page
        // window.location.href = `visualize.html?type=${type}`;
    }, 200);
}

// Add staggered animation to cards
document.addEventListener('DOMContentLoaded', function() {
    const cards = document.querySelectorAll('.card');
    cards.forEach((card, index) => {
        card.style.animationDelay = `${index * 0.1}s`;
    });
});

// Add parallax effect to floating shapes
document.addEventListener('mousemove', function(e) {
    const shapes = document.querySelectorAll('.shape');
    const mouseX = e.clientX / window.innerWidth;
    const mouseY = e.clientY / window.innerHeight;
    
    shapes.forEach((shape, index) => {
        const speed = (index + 1) * 0.5;
        const x = (mouseX - 0.5) * speed * 50;
        const y = (mouseY - 0.5) * speed * 50;
        shape.style.transform = `translate(${x}px, ${y}px)`;
    });
});
 let currentVisualization = null;
        let isAnimating = false;
        let animationSpeed = 500;
        let animationTimeout = null;

        // Data structures
        let stack = [];
        let queue = [];
        let linkedList = [];
        let binaryTree = null;
        let hashTable = {};
        let array = [];

        // Utility function to introduce delay
        function sleep(ms) {
            return new Promise(resolve => {
                animationTimeout = setTimeout(resolve, ms);
            });
        }

        // --- Modal Control Functions ---
        function openModal(title) {
            document.getElementById('modalTitle').textContent = title;
            document.getElementById('visualizationModal').style.display = 'block';
        }

        function closeModal() {
            document.getElementById('visualizationModal').style.display = 'none';
            // Clear any ongoing animations
            if (animationTimeout) {
                clearTimeout(animationTimeout);
                animationTimeout = null;
            }
            isAnimating = false;
            currentVisualization = null;
        }

        // --- Visualization Setup Functions ---
        function visualizeDataStructure(type) {
            currentVisualization = type;
            document.getElementById('visualizationContainer').innerHTML = '';
            document.getElementById('controls').innerHTML = '';
            isAnimating = false; // Reset animation flag

            switch (type) {
                case 'linkedlist':
                    openModal('Linked List Visualization');
                    setupLinkedListVisualization();
                    break;
                case 'stack':
                    openModal('Stack Visualization');
                    setupStackVisualization();
                    break;
                case 'queue':
                    openModal('Queue Visualization');
                    setupQueueVisualization();
                    break;
                case 'binarytree':
                    openModal('Binary Tree Visualization');
                    setupBinaryTreeVisualization();
                    break;
                case 'hashtable':
                    openModal('Hash Table Visualization');
                    setupHashTableVisualization();
                    break;
                case 'array':
                    openModal('Array Visualization');
                    setupArrayVisualization();
                    break;
            }
        }

        function visualizeAlgorithm(type) {
            currentVisualization = type;
            document.getElementById('visualizationContainer').innerHTML = '';
            document.getElementById('controls').innerHTML = '';
            isAnimating = false; // Reset animation flag

            switch (type) {
                case 'bubblesort':
                    openModal('Bubble Sort Visualization');
                    setupBubbleSortVisualization();
                    break;
                case 'quicksort':
                    openModal('Quick Sort Visualization');
                    setupQuickSortVisualization();
                    break;
                case 'binarysearch':
                    openModal('Binary Search Visualization');
                    setupBinarySearchVisualization();
                    break;
                case 'dfs':
                    openModal('Depth-First Search Visualization');
                    setupDFSVisualization();
                    break;
                case 'dijkstra':
                    openModal('Dijkstra\'s Algorithm Visualization');
                    setupDijkstraVisualization();
                    break;
                case 'mergesort':
                    openModal('Merge Sort Visualization');
                    setupMergeSortVisualization();
                    break;
            }
        }

        // --- Linked List Functions ---
        function setupLinkedListVisualization() {
            const controls = document.getElementById('controls');
            const container = document.getElementById('visualizationContainer');

            linkedList = [10, 20, 30]; // Initial sample linked list

            controls.innerHTML = `
                <input type="text" id="llValue" placeholder="Enter value" class="input-field">
                <button class="control-btn" onclick="insertLinkedList()">Insert End</button>
                <button class="control-btn" onclick="deleteLinkedList()">Delete End</button>
                <button class="control-btn" onclick="clearLinkedList()">Clear</button>
            `;

            container.innerHTML = '<div id="linkedListContainer" style="display: flex; align-items: center; justify-content: center; flex-wrap: wrap;"></div>';

            renderLinkedList();
        }

        function renderLinkedList() {
            const container = document.getElementById('linkedListContainer');
            container.innerHTML = '';

            linkedList.forEach((value, index) => {
                const element = document.createElement('div');
                element.className = 'linked-list-node';
                element.textContent = value;
                element.style.animationDelay = `${index * 0.1}s`;
                container.appendChild(element);
            });
        }

        function insertLinkedList() {
            const input = document.getElementById('llValue');
            const value = input.value.trim();
            if (value && !isNaN(value)) {
                linkedList.push(parseInt(value));
                input.value = '';
                renderLinkedList();
            }
        }

        function deleteLinkedList() {
            if (linkedList.length > 0) {
                linkedList.pop();
                renderLinkedList();
            }
        }

        function clearLinkedList() {
            linkedList = [];
            renderLinkedList();
        }

        // --- Stack Functions ---
        function setupStackVisualization() {
            const controls = document.getElementById('controls');
            const container = document.getElementById('visualizationContainer');

            stack = [10, 20, 30]; // Initial sample stack

            controls.innerHTML = `
                <input type="text" id="stackValue" placeholder="Enter value" class="input-field">
                <button class="control-btn" onclick="pushStack()">Push</button>
                <button class="control-btn" onclick="popStack()">Pop</button>
                <button class="control-btn" onclick="clearStack()">Clear</button>
            `;

            container.innerHTML = '<div id="stackContainer" style="display: flex; flex-direction: column-reverse; align-items: center; justify-content: flex-start; height: 300px; padding-top: 20px;"></div>';

            renderStack();
        }

        function renderStack() {
            const container = document.getElementById('stackContainer');
            container.innerHTML = '';

            stack.forEach((value, index) => {
                const element = document.createElement('div');
                element.className = 'stack-element';
                element.textContent = value;
                container.appendChild(element);
            });
        }

        function pushStack() {
            const input = document.getElementById('stackValue');
            const value = input.value.trim();
            if (value && !isNaN(value)) {
                stack.push(parseInt(value));
                input.value = '';
                renderStack();
            }
        }

        function popStack() {
            if (stack.length > 0) {
                stack.pop();
                renderStack();
            }
        }

        function clearStack() {
            stack = [];
            renderStack();
        }

        // --- Queue Functions ---
        function setupQueueVisualization() {
            const controls = document.getElementById('controls');
            const container = document.getElementById('visualizationContainer');

            queue = [10, 20, 30]; // Initial sample queue

            controls.innerHTML = `
                <input type="text" id="queueValue" placeholder="Enter value" class="input-field">
                <button class="control-btn" onclick="enqueueQueue()">Enqueue</button>
                <button class="control-btn" onclick="dequeueQueue()">Dequeue</button>
                <button class="control-btn" onclick="clearQueue()">Clear</button>
            `;

            container.innerHTML = '<div id="queueContainer" style="display: flex; align-items: center; justify-content: center; flex-wrap: wrap;"></div>';

            renderQueue();
        }

        function renderQueue() {
            const container = document.getElementById('queueContainer');
            container.innerHTML = '';

            queue.forEach((value, index) => {
                const element = document.createElement('div');
                element.className = 'queue-element';
                element.textContent = value;
                container.appendChild(element);
            });
        }

        function enqueueQueue() {
            const input = document.getElementById('queueValue');
            const value = input.value.trim();
            if (value && !isNaN(value)) {
                queue.push(parseInt(value));
                input.value = '';
                renderQueue();
            }
        }

        function dequeueQueue() {
            if (queue.length > 0) {
                queue.shift(); // Remove from the front
                renderQueue();
            }
        }

        function clearQueue() {
            queue = [];
            renderQueue();
        }

        // --- Hash Table Functions ---
        function setupHashTableVisualization() {
            const controls = document.getElementById('controls');
            const container = document.getElementById('visualizationContainer');

            hashTable = {}; // Initial empty hash table

            controls.innerHTML = `
                <input type="text" id="hashKey" placeholder="Enter Key" class="input-field" style="width: 100px;">
                <input type="text" id="hashValue" placeholder="Enter Value" class="input-field" style="width: 100px;">
                <button class="control-btn" onclick="insertHashTable()">Insert</button>
                <input type="text" id="searchKey" placeholder="Search Key" class="input-field" style="width: 100px;">
                <button class="control-btn" onclick="searchHashTable()">Search</button>
                <button class="control-btn" onclick="clearHashTable()">Clear</button>
            `;

            container.innerHTML = '<div id="hashTableContainer" style="display: flex; flex-direction: column; align-items: flex-start; justify-content: flex-start; width: 100%; height: 300px; overflow-y: auto;"></div>';

            renderHashTable();
        }

        function renderHashTable() {
            const container = document.getElementById('hashTableContainer');
            container.innerHTML = '';

            for (const key in hashTable) {
                const item = document.createElement('div');
                item.style.padding = '8px';
                item.style.margin = '5px';
                item.style.background = 'rgba(255, 255, 255, 0.1)';
                item.style.borderRadius = '10px';
                item.style.color = 'white';
                item.style.fontWeight = 'bold';
                item.style.minWidth = '150px';
                item.textContent = `Key: ${key}, Value: ${hashTable[key]}`;
                item.id = `hash-${key}`;
                container.appendChild(item);
            }
        }

        function insertHashTable() {
            const keyInput = document.getElementById('hashKey');
            const valueInput = document.getElementById('hashValue');
            const key = keyInput.value.trim();
            const value = valueInput.value.trim();

            if (key && value) {
                hashTable[key] = value;
                keyInput.value = '';
                valueInput.value = '';
                renderHashTable();
            }
        }

        async function searchHashTable() {
            const searchKeyInput = document.getElementById('searchKey');
            const searchKey = searchKeyInput.value.trim();

            if (searchKey) {
                const allItems = document.querySelectorAll('#hashTableContainer > div');
                allItems.forEach(item => item.style.background = 'rgba(255, 255, 255, 0.1)'); // Reset colors

                const foundItem = document.getElementById(`hash-${searchKey}`);
                if (foundItem) {
                    foundItem.style.background = 'linear-gradient(135deg, #48dbfb 0%, #0abde3 100%)';
                    await sleep(1000); // Highlight for a second
                    foundItem.style.background = 'rgba(255, 255, 255, 0.1)';
                } else {
                    alert(`Key "${searchKey}" not found.`);
                }
                searchKeyInput.value = '';
            }
        }

        function clearHashTable() {
            hashTable = {};
            renderHashTable();
        }

        // --- Array Functions ---
        function setupArrayVisualization() {
            const controls = document.getElementById('controls');
            const container = document.getElementById('visualizationContainer');
            
            array = [5, 3, 8, 1, 9, 2];
            
            controls.innerHTML = `
                <input type="text" id="arrayValue" placeholder="Enter value" class="input-field">
                <button class="control-btn" onclick="addToArray()">Add Element</button>
                <button class="control-btn" onclick="removeFromArray()">Remove Last</button>
                <button class="control-btn" onclick="generateRandomArrayElements()">Random Array</button>
                <button class="control-btn" onclick="clearArray()">Clear</button>
            `;
            
            container.innerHTML = '<div id="arrayContainer" style="display: flex; align-items: center; height: 300px; justify-content: center; flex-wrap: wrap;"></div>';
            
            renderArray();
        }

        function addToArray() {
            const input = document.getElementById('arrayValue');
            const value = input.value.trim();
            
            if (value && !isNaN(value)) {
                array.push(parseInt(value));
                input.value = '';
                renderArray();
            }
        }

        function removeFromArray() {
            if (array.length > 0) {
                array.pop();
                renderArray();
            }
        }

        function generateRandomArrayElements() {
            array = [];
            for (let i = 0; i < 8; i++) {
                array.push(Math.floor(Math.random() * 100) + 1);
            }
            renderArray();
        }

        function clearArray() {
            array = [];
            renderArray();
        }

        function renderArray() {
            const container = document.getElementById('arrayContainer');
            container.innerHTML = '';
            
            array.forEach((value, index) => {
                const element = document.createElement('div');
                element.className = 'array-element';
                element.textContent = value;
                element.id = `array-${index}`;
                element.style.animationDelay = `${index * 0.1}s`;
                container.appendChild(element);
            });
        }

        // --- Binary Tree Functions ---
        function setupBinaryTreeVisualization() {
            const controls = document.getElementById('controls');
            const container = document.getElementById('visualizationContainer');
            
            binaryTree = null;
            
            controls.innerHTML = `
                <input type="text" id="treeValue" placeholder="Enter value" class="input-field">
                <button class="control-btn" onclick="insertToTree()">Insert</button>
                <button class="control-btn" onclick="clearTree()">Clear</button>
                <button class="control-btn" onclick="generateSampleTree()">Sample Tree</button>
            `;
            
            container.innerHTML = '<div id="treeContainer" style="position: relative; height: 300px; width: 100%; display: flex; justify-content: center; align-items: flex-start; overflow: hidden;"></div>';
            
            generateSampleTree();
        }

        function insertToTree() {
            const input = document.getElementById('treeValue');
            const value = input.value.trim();
            
            if (value && !isNaN(value)) {
                const num = parseInt(value);
                binaryTree = insertNode(binaryTree, num);
                input.value = '';
                renderTree();
            }
        }

        function insertNode(root, value) {
            if (!root) {
                return { value, left: null, right: null };
            }
            
            if (value < root.value) {
                root.left = insertNode(root.left, value);
            } else if (value > root.value) {
                root.right = insertNode(root.right, value);
            }
            
            return root;
        }

        function clearTree() {
            binaryTree = null;
            renderTree();
        }

        function generateSampleTree() {
            binaryTree = null;
            const values = [50, 30, 70, 20, 40, 60, 80];
            values.forEach(value => {
                binaryTree = insertNode(binaryTree, value);
            });
            renderTree();
        }

        function renderTree() {
            const container = document.getElementById('treeContainer');
            container.innerHTML = '';
            
            if (!binaryTree) return;
            
            const nodePositions = new Map(); // Store {node: {x, y}}
            const levelMap = new Map(); // Store {node: level}

            // Calculate level and initial X positions (simple approach)
            function calculatePositions(node, level, leftOffset, rightOffset) {
                if (!node) return;

                const mid = (leftOffset + rightOffset) / 2;
                nodePositions.set(node, { x: mid, y: level });
                levelMap.set(node, level);

                calculatePositions(node.left, level + 1, leftOffset, mid - 1);
                calculatePositions(node.right, level + 1, mid + 1, rightOffset);
            }
            calculatePositions(binaryTree, 0, 0, container.offsetWidth);

            // Render nodes and connect them with lines (basic lines for now)
            nodePositions.forEach((pos, node) => {
                const element = document.createElement('div');
                element.className = 'tree-node';
                element.textContent = node.value;
                element.style.left = `${pos.x - 20}px`; // Adjust for node width/2
                element.style.top = `${pos.y * 60 + 20}px`; // Adjust for vertical spacing
                container.appendChild(element);

                // Draw lines to children (simple HTML elements for lines)
                if (node.left) {
                    const leftChildPos = nodePositions.get(node.left);
                    drawLine(container, pos.x, pos.y * 60 + 40, leftChildPos.x, leftChildPos.y * 60 + 20);
                }
                if (node.right) {
                    const rightChildPos = nodePositions.get(node.right);
                    drawLine(container, pos.x, pos.y * 60 + 40, rightChildPos.x, rightChildPos.y * 60 + 20);
                }
            });
        }

        function drawLine(container, x1, y1, x2, y2) {
            const line = document.createElement('div');
            line.style.position = 'absolute';
            line.style.background = 'rgba(255, 255, 255, 0.4)';
            line.style.height = '2px';
            
            const length = Math.sqrt((x2 - x1)**2 + (y2 - y1)**2);
            line.style.width = `${length}px`;
            
            const angle = Math.atan2(y2 - y1, x2 - x1) * 180 / Math.PI;
            line.style.transform = `rotate(${angle}deg)`;
            
            line.style.left = `${x1}px`;
            line.style.top = `${y1}px`;
            line.style.transformOrigin = '0 0'; // Rotate around the start point

            container.appendChild(line);
        }

        // --- Bubble Sort Functions ---
        function setupBubbleSortVisualization() {
            const controls = document.getElementById('controls');
            const container = document.getElementById('visualizationContainer');
            
            array = [64, 34, 25, 12, 22, 11, 90];
            
            controls.innerHTML = `
                <button class="control-btn" onclick="startBubbleSort()">Start Sort</button>
                <button class="control-btn" onclick="generateRandomArrayElements()">Random Array</button>
                <button class="control-btn" onclick="resetBubbleSort()">Reset</button>
                <label style="color: white; margin-left: 10px;">Speed: </label>
                <input type="range" min="100" max="1000" value="500" id="speedSlider" onchange="updateSpeed()" style="margin-left: 10px;">
            `;
            
            container.innerHTML = '<div id="sortContainer" style="display: flex; align-items: flex-end; height: 300px; justify-content: center; padding: 20px;"></div>';
            
            renderSortArray();
        }

        function updateSpeed() {
            const slider = document.getElementById('speedSlider');
            animationSpeed = parseInt(slider.value);
        }

        function renderSortArray() {
            const container = document.getElementById('sortContainer');
            container.innerHTML = '';
            
            array.forEach((value, index) => {
                const element = document.createElement('div');
                element.className = 'array-element';
                element.textContent = value;
                element.id = `sort-${index}`;
                element.style.height = `${value * 3}px`;
                element.style.width = '50px';
                element.style.margin = '2px';
                element.style.display = 'flex';
                element.style.alignItems = 'flex-end';
                element.style.justifyContent = 'center';
                element.style.paddingBottom = '5px';
                container.appendChild(element);
            });
        }

        async function startBubbleSort() {
            if (isAnimating) return;
            isAnimating = true;
            
            const n = array.length;
            
            for (let i = 0; i < n - 1; i++) {
                for (let j = 0; j < n - i - 1; j++) {
                    const elem1 = document.getElementById(`sort-${j}`);
                    const elem2 = document.getElementById(`sort-${j + 1}`);
                    
                    elem1.classList.add('comparing');
                    elem2.classList.add('comparing');
                    
                    await sleep(animationSpeed);
                    
                    if (array[j] > array[j + 1]) {
                        [array[j], array[j + 1]] = [array[j + 1], array[j]];
                        
                        const temp = elem1.textContent;
                        elem1.textContent = elem2.textContent;
                        elem2.textContent = temp;
                        
                        const tempHeight = elem1.style.height;
                        elem1.style.height = elem2.style.height;
                        elem2.style.height = tempHeight;
                    }
                    
                    elem1.classList.remove('comparing');
                    elem2.classList.remove('comparing');
                }
                
                const sortedElement = document.getElementById(`sort-${n - i - 1}`);
                sortedElement.classList.add('sorted');
            }
            
            const firstElement = document.getElementById(`sort-0`);
            firstElement.classList.add('sorted');
            
            isAnimating = false;
        }

        function resetBubbleSort() {
            if (animationTimeout) {
                clearTimeout(animationTimeout);
                animationTimeout = null;
            }
            isAnimating = false;
            generateRandomArrayElements(); // Regenerate a new array to reset state
            renderSortArray();
        }

        // --- Quick Sort Functions ---
        function setupQuickSortVisualization() {
            const controls = document.getElementById('controls');
            const container = document.getElementById('visualizationContainer');

            array = [22, 11, 90, 64, 34, 25, 12];

            controls.innerHTML = `
                <button class="control-btn" onclick="startQuickSort()">Start Sort</button>
                <button class="control-btn" onclick="generateRandomArrayElements()">Random Array</button>
                <button class="control-btn" onclick="resetQuickSort()">Reset</button>
                <label style="color: white; margin-left: 10px;">Speed: </label>
                <input type="range" min="100" max="1000" value="500" id="speedSlider" onchange="updateSpeed()" style="margin-left: 10px;">
            `;

            container.innerHTML = '<div id="sortContainer" style="display: flex; align-items: flex-end; height: 300px; justify-content: center; padding: 20px;"></div>';

            renderSortArray();
        }

        async function startQuickSort() {
            if (isAnimating) return;
            isAnimating = true;
            await quickSort(array, 0, array.length - 1);
            isAnimating = false;
            // Mark all elements as sorted after completion
            const elements = document.querySelectorAll('.array-element');
            elements.forEach(elem => elem.classList.add('sorted'));
        }

        async function quickSort(arr, low, high) {
            if (low < high) {
                let pi = await partition(arr, low, high);
                await quickSort(arr, low, pi - 1);
                await quickSort(arr, pi + 1, high);
            }
        }

        async function partition(arr, low, high) {
            let pivot = arr[high];
            const pivotElem = document.getElementById(`sort-${high}`);
            pivotElem.style.background = 'linear-gradient(135deg, #FFD700 0%, #FFA500 100%)'; // Gold for pivot
            await sleep(animationSpeed);

            let i = (low - 1); // Index of smaller element

            for (let j = low; j <= high - 1; j++) {
                const elemJ = document.getElementById(`sort-${j}`);
                elemJ.classList.add('comparing');
                await sleep(animationSpeed);

                if (arr[j] < pivot) {
                    i++;
                    [arr[i], arr[j]] = [arr[j], arr[i]];
                    renderSortArray(); // Re-render to show swap visually
                    await sleep(animationSpeed);
                }
                elemJ.classList.remove('comparing');
            }

            [arr[i + 1], arr[high]] = [arr[high], arr[i + 1]];
            renderSortArray(); // Re-render to show final pivot placement
            await sleep(animationSpeed);

            // Remove pivot highlight
            pivotElem.style.background = 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)';

            return (i + 1);
        }

        function resetQuickSort() {
            if (animationTimeout) {
                clearTimeout(animationTimeout);
                animationTimeout = null;
            }
            isAnimating = false;
            generateRandomArrayElements(); // Regenerate a new array to reset state
            renderSortArray();
        }

        // --- Binary Search Functions ---
        function setupBinarySearchVisualization() {
            const controls = document.getElementById('controls');
            const container = document.getElementById('visualizationContainer');

            array = [5, 10, 15, 20, 25, 30, 35, 40, 45, 50]; // Must be sorted for Binary Search

            controls.innerHTML = `
                <input type="text" id="searchValue" placeholder="Value to search" class="input-field">
                <button class="control-btn" onclick="startBinarySearch()">Search</button>
                <button class="control-btn" onclick="generateSortedArray()">New Sorted Array</button>
                <button class="control-btn" onclick="resetBinarySearch()">Reset</button>
                <label style="color: white; margin-left: 10px;">Speed: </label>
                <input type="range" min="100" max="1000" value="500" id="speedSlider" onchange="updateSpeed()" style="margin-left: 10px;">
            `;

            container.innerHTML = '<div id="arraySearchContainer" style="display: flex; align-items: center; height: 300px; justify-content: center; flex-wrap: wrap;"></div>';

            renderArraySearch();
        }

        function generateSortedArray() {
            array = [];
            for (let i = 0; i < 10; i++) {
                array.push(Math.floor(Math.random() * 50) + 1);
            }
            array.sort((a, b) => a - b); // Ensure it's sorted
            renderArraySearch();
        }

        function renderArraySearch() {
            const container = document.getElementById('arraySearchContainer');
            container.innerHTML = '';
            
            array.forEach((value, index) => {
                const element = document.createElement('div');
                element.className = 'array-element';
                element.textContent = value;
                element.id = `search-${index}`;
                element.style.animationDelay = `${index * 0.05}s`;
                container.appendChild(element);
            });
        }

        async function startBinarySearch() {
            if (isAnimating) return;
            isAnimating = true;

            const searchValueInput = document.getElementById('searchValue');
            const target = parseInt(searchValueInput.value.trim());

            if (isNaN(target)) {
                alert("Please enter a valid number to search.");
                isAnimating = false;
                return;
            }

            // Reset colors
            document.querySelectorAll('.array-element').forEach(elem => {
                elem.classList.remove('comparing', 'sorted');
                elem.style.background = 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)';
            });

            let low = 0;
            let high = array.length - 1;
            let found = false;

            while (low <= high) {
                const mid = Math.floor((low + high) / 2);
                const midElement = document.getElementById(`search-${mid}`);

                // Highlight current middle element
                midElement.classList.add('comparing');
                await sleep(animationSpeed);

                if (array[mid] === target) {
                    midElement.classList.remove('comparing');
                    midElement.classList.add('sorted'); // Found
                    found = true;
                    break;
                } else if (array[mid] < target) {
                    // Highlight elements to the left as discarded
                    for (let i = low; i <= mid; i++) {
                        const elem = document.getElementById(`search-${i}`);
                        if (!elem.classList.contains('sorted')) {
                            elem.style.background = 'rgba(255, 255, 255, 0.05)'; // Faded out
                        }
                    }
                    low = mid + 1;
                } else {
                    // Highlight elements to the right as discarded
                    for (let i = mid; i <= high; i++) {
                        const elem = document.getElementById(`search-${i}`);
                        if (!elem.classList.contains('sorted')) {
                            elem.style.background = 'rgba(255, 255, 255, 0.05)'; // Faded out
                        }
                    }
                    high = mid - 1;
                }
                midElement.classList.remove('comparing');
            }

            if (!found) {
                alert(`Value ${target} not found in the array.`);
            } else {
                alert(`Value ${target} found!`);
            }
            isAnimating = false;
        }

        function resetBinarySearch() {
            if (animationTimeout) {
                clearTimeout(animationTimeout);
                animationTimeout = null;
            }
            isAnimating = false;
            generateSortedArray();
        }

        // --- Depth-First Search (DFS) for Binary Tree ---
        function setupDFSVisualization() {
            const controls = document.getElementById('controls');
            const container = document.getElementById('visualizationContainer');

            binaryTree = null; // Ensure fresh tree for DFS
            const values = [50, 30, 70, 20, 40, 60, 80];
            values.forEach(value => {
                binaryTree = insertNode(binaryTree, value);
            });
            renderTreeForTraversal(); // Use a dedicated render for traversal to prepare positions

            controls.innerHTML = `
                <input type="text" id="dfsTarget" placeholder="Target value" class="input-field">
                <button class="control-btn" onclick="startDFS()">Start DFS</button>
                <button class="control-btn" onclick="generateSampleTreeDFS()">New Tree</button>
                <button class="control-btn" onclick="resetDFS()">Reset</button>
                <label style="color: white; margin-left: 10px;">Speed: </label>
                <input type="range" min="100" max="1000" value="500" id="speedSlider" onchange="updateSpeed()" style="margin-left: 10px;">
            `;
            container.innerHTML = '<div id="dfsTreeContainer" style="position: relative; height: 350px; width: 100%; display: flex; justify-content: center; align-items: flex-start; overflow: hidden;"></div>';
            renderTreeForTraversal();
        }

        const nodePosMap = new Map(); // Global map to store positions for lines

        function renderTreeForTraversal() {
            const container = document.getElementById('dfsTreeContainer');
            container.innerHTML = '';
            nodePosMap.clear();

            if (!binaryTree) return;

            const maxLevel = getMaxLevel(binaryTree);
            const nodeWidth = 50;
            const nodeHeight = 50;
            const horizontalSpacing = 100; // Adjusted for better spacing
            const verticalSpacing = 70;

            function calculateNodePositions(node, x, y, level, parentX, parentY, totalNodesInLevel) {
                if (!node) return;

                // Adjust x based on total width and current level's node count
                const newX = x;
                const newY = y;
                nodePosMap.set(node, { x: newX, y: newY, level: level });

                const leftChildX = newX - (horizontalSpacing / (level + 1));
                const rightChildX = newX + (horizontalSpacing / (level + 1));
                const nextLevelY = newY + verticalSpacing;

                calculateNodePositions(node.left, leftChildX, nextLevelY, level + 1, newX, newY, totalNodesInLevel * 2);
                calculateNodePositions(node.right, rightChildX, nextLevelY, level + 1, newX, newY, totalNodesInLevel * 2);
            }

            // A more balanced initial x for the root
            const initialX = container.offsetWidth / 2;
            calculateNodePositions(binaryTree, initialX, 20, 0);

            // Render nodes and lines based on calculated positions
            nodePosMap.forEach((pos, node) => {
                const element = document.createElement('div');
                element.className = 'tree-node';
                element.textContent = node.value;
                element.id = `node-${node.value}`;
                element.style.left = `${pos.x - nodeWidth / 2}px`;
                element.style.top = `${pos.y}px`;
                container.appendChild(element);

                if (node.left) {
                    const leftChildPos = nodePosMap.get(node.left);
                    drawLine(container, pos.x, pos.y + nodeHeight / 2, leftChildPos.x, leftChildPos.y + nodeHeight / 2);
                }
                if (node.right) {
                    const rightChildPos = nodePosMap.get(node.right);
                    drawLine(container, pos.x, pos.y + nodeHeight / 2, rightChildPos.x, rightChildPos.y + nodeHeight / 2);
                }
            });
        }
        
        // Helper to get max level for layout calculation
        function getMaxLevel(node, level = 0) {
            if (!node) return level - 1;
            return Math.max(getMaxLevel(node.left, level + 1), getMaxLevel(node.right, level + 1));
        }

        async function startDFS() {
            if (isAnimating) return;
            isAnimating = true;

            const targetInput = document.getElementById('dfsTarget');
            const targetValue = parseInt(targetInput.value.trim());

            // Reset node colors
            document.querySelectorAll('.tree-node').forEach(node => {
                node.style.background = 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)';
            });

            const stackDFS = [];
            const visited = new Set();
            let found = false;

            if (binaryTree) {
                stackDFS.push(binaryTree);
                while (stackDFS.length > 0 && !found) {
                    const currentNode = stackDFS.pop();
                    if (!currentNode || visited.has(currentNode)) continue;

                    const nodeElement = document.getElementById(`node-${currentNode.value}`);
                    nodeElement.style.background = 'linear-gradient(135deg, #ff6b6b 0%, #feca57 100%)'; // Visiting
                    await sleep(animationSpeed);

                    if (currentNode.value === targetValue) {
                        nodeElement.style.background = 'linear-gradient(135deg, #48dbfb 0%, #0abde3 100%)'; // Found
                        found = true;
                        alert(`Value ${targetValue} found!`);
                        break;
                    }

                    visited.add(currentNode);
                    nodeElement.style.background = 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)'; // Reset after visit

                    // Push right child first, then left, so left is processed first (LIFO)
                    if (currentNode.right) stackDFS.push(currentNode.right);
                    if (currentNode.left) stackDFS.push(currentNode.left);
                }
            }

            if (!found) {
                alert(`Value ${targetValue} not found in the tree.`);
            }
            isAnimating = false;
        }

        function generateSampleTreeDFS() {
            binaryTree = null;
            const values = [50, 30, 70, 20, 40, 60, 80, 10, 25, 35, 45, 55, 65, 75, 85];
            values.forEach(value => {
                binaryTree = insertNode(binaryTree, value);
            });
            renderTreeForTraversal();
        }

        function resetDFS() {
            if (animationTimeout) {
                clearTimeout(animationTimeout);
                animationTimeout = null;
            }
            isAnimating = false;
            generateSampleTreeDFS();
        }

        // --- Dijkstra's Algorithm Visualization (Placeholder - requires graph representation) ---
        function setupDijkstraVisualization() {
            const controls = document.getElementById('controls');
            const container = document.getElementById('visualizationContainer');

            controls.innerHTML = `
                <p style="color: white; text-align: center;">Dijkstra's Algorithm visualization is complex and typically requires a graph representation (nodes and edges).</p>
                <p style="color: white; text-align: center;">For now, this is a placeholder. You would typically define nodes, edges, and weights here.</p>
                <button class="control-btn" onclick="alert('Dijkstra visualization coming soon!')">Simulate (Placeholder)</button>
            `;

            container.innerHTML = '<p style="color: rgba(255, 255, 255, 0.7); text-align: center; margin-top: 50px;">Graph visualization would appear here.</p>';
        }

        // --- Merge Sort Functions ---
        function setupMergeSortVisualization() {
            const controls = document.getElementById('controls');
            const container = document.getElementById('visualizationContainer');

            array = [38, 27, 43, 3, 9, 82, 10];

            controls.innerHTML = `
                <button class="control-btn" onclick="startMergeSort()">Start Sort</button>
                <button class="control-btn" onclick="generateRandomArrayElements()">Random Array</button>
                <button class="control-btn" onclick="resetMergeSort()">Reset</button>
                <label style="color: white; margin-left: 10px;">Speed: </label>
                <input type="range" min="100" max="1000" value="500" id="speedSlider" onchange="updateSpeed()" style="margin-left: 10px;">
            `;

            container.innerHTML = '<div id="sortContainer" style="display: flex; align-items: flex-end; height: 300px; justify-content: center; padding: 20px;"></div>';

            renderSortArray();
        }

        async function startMergeSort() {
            if (isAnimating) return;
            isAnimating = true;
            await mergeSort(array, 0, array.length - 1);
            isAnimating = false;
            // Mark all elements as sorted after completion
            const elements = document.querySelectorAll('.array-element');
            elements.forEach(elem => elem.classList.add('sorted'));
        }

        async function mergeSort(arr, l, r) {
            if (l >= r) {
                return;
            }
            const m = l + parseInt((r - l) / 2);
            await mergeSort(arr, l, m);
            await mergeSort(arr, m + 1, r);
            await merge(arr, l, m, r);
        }

        async function merge(arr, l, m, r) {
            const n1 = m - l + 1;
            const n2 = r - m;

            // Create temp arrays
            const L = new Array(n1);
            const R = new Array(n2);

            // Copy data to temp arrays L[] and R[]
            for (let i = 0; i < n1; i++) {
                L[i] = arr[l + i];
                const elem = document.getElementById(`sort-${l + i}`);
                elem.classList.add('comparing'); // Highlight elements being merged
            }
            for (let j = 0; j < n2; j++) {
                R[j] = arr[m + 1 + j];
                const elem = document.getElementById(`sort-${m + 1 + j}`);
                elem.classList.add('comparing'); // Highlight elements being merged
            }
            await sleep(animationSpeed);

            // Merge the temp arrays back into arr[l..r]
            let i = 0; // Initial index of first subarray
            let j = 0; // Initial index of second subarray
            let k = l; // Initial index of merged subarray

            while (i < n1 && j < n2) {
                const elem1 = document.getElementById(`sort-${l + i}`);
                const elem2 = document.getElementById(`sort-${m + 1 + j}`);
                
                // Dim previous comparisons, highlight current ones (optional, can be too noisy)
                // document.querySelectorAll('.array-element.comparing').forEach(e => e.classList.remove('comparing'));
                // elem1.classList.add('comparing');
                // elem2.classList.add('comparing');
                // await sleep(animationSpeed);

                if (L[i] <= R[j]) {
                    arr[k] = L[i];
                    i++;
                } else {
                    arr[k] = R[j];
                    j++;
                }
                renderSortArray(); // Re-render to show current state
                await sleep(animationSpeed);
                k++;
            }

            // Copy the remaining elements of L[], if there are any
            while (i < n1) {
                arr[k] = L[i];
                renderSortArray();
                await sleep(animationSpeed);
                i++;
                k++;
            }

            // Copy the remaining elements of R[], if there are any
            while (j < n2) {
                arr[k] = R[j];
                renderSortArray();
                await sleep(animationSpeed);
                j++;
                k++;
            }

            // Remove comparing class from merged elements
            for (let idx = l; idx <= r; idx++) {
                const elem = document.getElementById(`sort-${idx}`);
                elem.classList.remove('comparing');
            }
        }

        function resetMergeSort() {
            if (animationTimeout) {
                clearTimeout(animationTimeout);
                animationTimeout = null;
            }
            isAnimating = false;
            generateRandomArrayElements(); // Reuse function to generate new random array
            renderSortArray();
        }

        // Initialize animations on load
        document.addEventListener('DOMContentLoaded', () => {
            // No specific initializations needed here, as visualizations are modal-based
        });
         // --- Enhanced Dijkstra's Algorithm Implementation ---
let graph = {};
let graphNodes = [];
let graphEdges = [];

function setupDijkstraVisualization() {
    const controls = document.getElementById('controls');
    const container = document.getElementById('visualizationContainer');

    // Initialize sample graph
    graph = {
        'A': { 'B': 4, 'C': 2 },
        'B': { 'A': 4, 'C': 1, 'D': 5 },
        'C': { 'A': 2, 'B': 1, 'D': 8, 'E': 10 },
        'D': { 'B': 5, 'C': 8, 'E': 2 },
        'E': { 'C': 10, 'D': 2 }
    };

    graphNodes = ['A', 'B', 'C', 'D', 'E'];
    graphEdges = [
        { from: 'A', to: 'B', weight: 4 },
        { from: 'A', to: 'C', weight: 2 },
        { from: 'B', to: 'C', weight: 1 },
        { from: 'B', to: 'D', weight: 5 },
        { from: 'C', to: 'D', weight: 8 },
        { from: 'C', to: 'E', weight: 10 },
        { from: 'D', to: 'E', weight: 2 }
    ];

    controls.innerHTML = `
        <select id="startNode" class="input-field" style="width: 100px;">
            <option value="A">Node A</option>
            <option value="B">Node B</option>
            <option value="C">Node C</option>
            <option value="D">Node D</option>
            <option value="E">Node E</option>
        </select>
        <select id="endNode" class="input-field" style="width: 100px;">
            <option value="A">Node A</option>
            <option value="B">Node B</option>
            <option value="C">Node C</option>
            <option value="D">Node D</option>
            <option value="E" selected>Node E</option>
        </select>
        <button class="control-btn" onclick="startDijkstra()">Find Shortest Path</button>
        <button class="control-btn" onclick="resetDijkstra()">Reset</button>
        <label style="color: white; margin-left: 10px;">Speed: </label>
        <input type="range" min="200" max="1000" value="500" id="speedSlider" onchange="updateSpeed()" style="margin-left: 10px;">
    `;

    container.innerHTML = '<div id="graphContainer" style="position: relative; height: 350px; width: 100%; display: flex; justify-content: center; align-items: center; overflow: hidden;"></div>';
    
    renderGraph();
}

function renderGraph() {
    const container = document.getElementById('graphContainer');
    container.innerHTML = '';

    // Position nodes in a circle for better visualization
    const centerX = container.offsetWidth / 2 || 400;
    const centerY = container.offsetHeight / 2 || 175;
    const radius = 120;

    const nodePositions = {};
    graphNodes.forEach((node, index) => {
        const angle = (index * 2 * Math.PI) / graphNodes.length;
        const x = centerX + radius * Math.cos(angle);
        const y = centerY + radius * Math.sin(angle);
        nodePositions[node] = { x, y };

        // Create node element
        const nodeElement = document.createElement('div');
        nodeElement.className = 'graph-node';
        nodeElement.id = `graph-node-${node}`;
        nodeElement.textContent = node;
        nodeElement.style.position = 'absolute';
        nodeElement.style.left = `${x - 25}px`;
        nodeElement.style.top = `${y - 25}px`;
        nodeElement.style.width = '50px';
        nodeElement.style.height = '50px';
        nodeElement.style.borderRadius = '50%';
        nodeElement.style.background = 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)';
        nodeElement.style.color = 'white';
        nodeElement.style.display = 'flex';
        nodeElement.style.alignItems = 'center';
        nodeElement.style.justifyContent = 'center';
        nodeElement.style.fontWeight = 'bold';
        nodeElement.style.border = '2px solid rgba(255, 255, 255, 0.3)';
        nodeElement.style.zIndex = '10';
        container.appendChild(nodeElement);
    });

    // Create edges
    graphEdges.forEach(edge => {
        const fromPos = nodePositions[edge.from];
        const toPos = nodePositions[edge.to];
        
        // Create edge line
        const edgeLine = document.createElement('div');
        edgeLine.className = 'graph-edge';
        edgeLine.id = `edge-${edge.from}-${edge.to}`;
        edgeLine.style.position = 'absolute';
        edgeLine.style.background = 'rgba(255, 255, 255, 0.4)';
        edgeLine.style.height = '3px';
        edgeLine.style.zIndex = '1';
        
        const length = Math.sqrt((toPos.x - fromPos.x)**2 + (toPos.y - fromPos.y)**2);
        edgeLine.style.width = `${length}px`;
        
        const angle = Math.atan2(toPos.y - fromPos.y, toPos.x - fromPos.x) * 180 / Math.PI;
        edgeLine.style.transform = `rotate(${angle}deg)`;
        edgeLine.style.left = `${fromPos.x}px`;
        edgeLine.style.top = `${fromPos.y}px`;
        edgeLine.style.transformOrigin = '0 0';
        container.appendChild(edgeLine);

        // Create weight label
        const weightLabel = document.createElement('div');
        weightLabel.className = 'edge-weight';
        weightLabel.textContent = edge.weight;
        weightLabel.style.position = 'absolute';
        weightLabel.style.left = `${(fromPos.x + toPos.x) / 2 - 10}px`;
        weightLabel.style.top = `${(fromPos.y + toPos.y) / 2 - 10}px`;
        weightLabel.style.background = 'rgba(0, 0, 0, 0.7)';
        weightLabel.style.color = 'white';
        weightLabel.style.padding = '2px 6px';
        weightLabel.style.borderRadius = '10px';
        weightLabel.style.fontSize = '12px';
        weightLabel.style.fontWeight = 'bold';
        weightLabel.style.zIndex = '5';
        container.appendChild(weightLabel);
    });
}

async function startDijkstra() {
    if (isAnimating) return;
    isAnimating = true;

    const startNode = document.getElementById('startNode').value;
    const endNode = document.getElementById('endNode').value;

    // Reset all node and edge colors
    document.querySelectorAll('.graph-node').forEach(node => {
        node.style.background = 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)';
        node.style.border = '2px solid rgba(255, 255, 255, 0.3)';
    });
    document.querySelectorAll('.graph-edge').forEach(edge => {
        edge.style.background = 'rgba(255, 255, 255, 0.4)';
    });

    // Dijkstra's algorithm implementation
    const distances = {};
    const previous = {};
    const unvisited = new Set();
    const visited = new Set();

    // Initialize distances
    graphNodes.forEach(node => {
        distances[node] = node === startNode ? 0 : Infinity;
        previous[node] = null;
        unvisited.add(node);
    });

    // Update start node display
    const startNodeElement = document.getElementById(`graph-node-${startNode}`);
    startNodeElement.style.background = 'linear-gradient(135deg, #48dbfb 0%, #0abde3 100%)';
    startNodeElement.style.border = '3px solid #48dbfb';
    await sleep(animationSpeed);

    while (unvisited.size > 0) {
        // Find unvisited node with minimum distance
        let currentNode = null;
        let minDistance = Infinity;
        
        for (const node of unvisited) {
            if (distances[node] < minDistance) {
                minDistance = distances[node];
                currentNode = node;
            }
        }

        if (currentNode === null || distances[currentNode] === Infinity) {
            break;
        }

        // Mark current node as being processed
        const currentNodeElement = document.getElementById(`graph-node-${currentNode}`);
        if (currentNode !== startNode) {
            currentNodeElement.style.background = 'linear-gradient(135deg, #ff6b6b 0%, #feca57 100%)';
            currentNodeElement.style.border = '3px solid #ff6b6b';
        }
        await sleep(animationSpeed);

        // Check neighbors
        if (graph[currentNode]) {
            for (const neighbor in graph[currentNode]) {
                if (visited.has(neighbor)) continue;

                const edgeWeight = graph[currentNode][neighbor];
                const newDistance = distances[currentNode] + edgeWeight;

                // Highlight the edge being examined
                const edgeElement = document.getElementById(`edge-${currentNode}-${neighbor}`) || 
                                 document.getElementById(`edge-${neighbor}-${currentNode}`);
                if (edgeElement) {
                    edgeElement.style.background = 'linear-gradient(135deg, #feca57 0%, #ff9ff3 100%)';
                    edgeElement.style.height = '5px';
                }

                // Highlight neighbor being examined
                const neighborElement = document.getElementById(`graph-node-${neighbor}`);
                if (neighbor !== startNode && !visited.has(neighbor)) {
                    neighborElement.style.background = 'linear-gradient(135deg, #feca57 0%, #ff9ff3 100%)';
                    neighborElement.style.border = '3px solid #feca57';
                }
                await sleep(animationSpeed);

                if (newDistance < distances[neighbor]) {
                    distances[neighbor] = newDistance;
                    previous[neighbor] = currentNode;
                    
                    // Show distance update
                    neighborElement.innerHTML = `${neighbor}<br><small>${newDistance}</small>`;
                }

                // Reset edge color
                if (edgeElement) {
                    edgeElement.style.background = 'rgba(255, 255, 255, 0.4)';
                    edgeElement.style.height = '3px';
                }
                
                // Reset neighbor color if not visited
                if (neighbor !== startNode && !visited.has(neighbor)) {
                    neighborElement.style.background = 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)';
                    neighborElement.style.border = '2px solid rgba(255, 255, 255, 0.3)';
                }
            }
        }

        // Mark current node as visited
        visited.add(currentNode);
        unvisited.delete(currentNode);
        
        if (currentNode !== startNode) {
            currentNodeElement.style.background = 'linear-gradient(135deg, #10ac84 0%, #1dd1a1 100%)';
            currentNodeElement.style.border = '3px solid #10ac84';
        }
        await sleep(animationSpeed);
    }

    // Highlight shortest path
    if (distances[endNode] !== Infinity) {
        const path = [];
        let current = endNode;
        while (current !== null) {
            path.unshift(current);
            current = previous[current];
        }

        // Highlight path
        for (let i = 0; i < path.length - 1; i++) {
            const from = path[i];
            const to = path[i + 1];
            const edgeElement = document.getElementById(`edge-${from}-${to}`) || 
                             document.getElementById(`edge-${to}-${from}`);
            if (edgeElement) {
                edgeElement.style.background = 'linear-gradient(135deg, #FFD700 0%, #FFA500 100%)';
                edgeElement.style.height = '6px';
            }
        }

        // Highlight end node
        const endNodeElement = document.getElementById(`graph-node-${endNode}`);
        endNodeElement.style.background = 'linear-gradient(135deg, #e17055 0%, #fd79a8 100%)';
        endNodeElement.style.border = '3px solid #e17055';

        alert(`Shortest path from ${startNode} to ${endNode}: ${path.join(' → ')}\nTotal distance: ${distances[endNode]}`);
    } else {
        alert(`No path found from ${startNode} to ${endNode}`);
    }

    isAnimating = false;
}

function resetDijkstra() {
    if (animationTimeout) {
        clearTimeout(animationTimeout);
        animationTimeout = null;
    }
    isAnimating = false;
    renderGraph();
}

// --- Enhanced Graph-based DFS Implementation ---
let dfsGraph = {};
let dfsNodes = [];
let dfsEdges = [];

function setupDFSVisualization() {
    const controls = document.getElementById('controls');
    const container = document.getElementById('visualizationContainer');

    // Initialize sample graph for DFS
    dfsGraph = {
        'A': ['B', 'C'],
        'B': ['A', 'D', 'E'],
        'C': ['A', 'F'],
        'D': ['B'],
        'E': ['B', 'F'],
        'F': ['C', 'E']
    };

    dfsNodes = ['A', 'B', 'C', 'D', 'E', 'F'];
    dfsEdges = [
        { from: 'A', to: 'B' },
        { from: 'A', to: 'C' },
        { from: 'B', to: 'D' },
        { from: 'B', to: 'E' },
        { from: 'C', to: 'F' },
        { from: 'E', to: 'F' }
    ];

    controls.innerHTML = `
        <select id="dfsStartNode" class="input-field" style="width: 120px;">
            <option value="A">Start from A</option>
            <option value="B">Start from B</option>
            <option value="C">Start from C</option>
            <option value="D">Start from D</option>
            <option value="E">Start from E</option>
            <option value="F">Start from F</option>
        </select>
        <input type="text" id="dfsTarget" placeholder="Target node" class="input-field" style="width: 100px;">
        <button class="control-btn" onclick="startGraphDFS()">Start DFS</button>
        <button class="control-btn" onclick="resetGraphDFS()">Reset</button>
        <label style="color: white; margin-left: 10px;">Speed: </label>
        <input type="range" min="200" max="1000" value="500" id="speedSlider" onchange="updateSpeed()" style="margin-left: 10px;">
    `;

    container.innerHTML = '<div id="dfsGraphContainer" style="position: relative; height: 350px; width: 100%; display: flex; justify-content: center; align-items: center; overflow: hidden;"></div>';
    
    renderDFSGraph();
}

function renderDFSGraph() {
    const container = document.getElementById('dfsGraphContainer');
    container.innerHTML = '';

    // Position nodes in a hexagonal pattern for better visualization
    const centerX = container.offsetWidth / 2 || 400;
    const centerY = container.offsetHeight / 2 || 175;
    const radius = 100;

    const nodePositions = {};
    dfsNodes.forEach((node, index) => {
        const angle = (index * 2 * Math.PI) / dfsNodes.length;
        const x = centerX + radius * Math.cos(angle);
        const y = centerY + radius * Math.sin(angle);
        nodePositions[node] = { x, y };

        // Create node element
        const nodeElement = document.createElement('div');
        nodeElement.className = 'dfs-graph-node';
        nodeElement.id = `dfs-node-${node}`;
        nodeElement.textContent = node;
        nodeElement.style.position = 'absolute';
        nodeElement.style.left = `${x - 25}px`;
        nodeElement.style.top = `${y - 25}px`;
        nodeElement.style.width = '50px';
        nodeElement.style.height = '50px';
        nodeElement.style.borderRadius = '50%';
        nodeElement.style.background = 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)';
        nodeElement.style.color = 'white';
        nodeElement.style.display = 'flex';
        nodeElement.style.alignItems = 'center';
        nodeElement.style.justifyContent = 'center';
        nodeElement.style.fontWeight = 'bold';
        nodeElement.style.border = '2px solid rgba(255, 255, 255, 0.3)';
        nodeElement.style.zIndex = '10';
        container.appendChild(nodeElement);
    });

    // Create edges
    dfsEdges.forEach(edge => {
        const fromPos = nodePositions[edge.from];
        const toPos = nodePositions[edge.to];
        
        // Create edge line
        const edgeLine = document.createElement('div');
        edgeLine.className = 'dfs-graph-edge';
        edgeLine.id = `dfs-edge-${edge.from}-${edge.to}`;
        edgeLine.style.position = 'absolute';
        edgeLine.style.background = 'rgba(255, 255, 255, 0.4)';
        edgeLine.style.height = '3px';
        edgeLine.style.zIndex = '1';
        
        const length = Math.sqrt((toPos.x - fromPos.x)**2 + (toPos.y - fromPos.y)**2);
        edgeLine.style.width = `${length}px`;
        
        const angle = Math.atan2(toPos.y - fromPos.y, toPos.x - fromPos.x) * 180 / Math.PI;
        edgeLine.style.transform = `rotate(${angle}deg)`;
        edgeLine.style.left = `${fromPos.x}px`;
        edgeLine.style.top = `${fromPos.y}px`;
        edgeLine.style.transformOrigin = '0 0';
        container.appendChild(edgeLine);
    });
}

async function startGraphDFS() {
    if (isAnimating) return;
    isAnimating = true;

    const startNode = document.getElementById('dfsStartNode').value;
    const targetNode = document.getElementById('dfsTarget').value.trim().toUpperCase();

    // Reset all node and edge colors
    document.querySelectorAll('.dfs-graph-node').forEach(node => {
        node.style.background = 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)';
        node.style.border = '2px solid rgba(255, 255, 255, 0.3)';
    });
    document.querySelectorAll('.dfs-graph-edge').forEach(edge => {
        edge.style.background = 'rgba(255, 255, 255, 0.4)';
    });

    const stack = [startNode];
    const visited = new Set();
    const path = [];
    let found = false;

    // Mark start node
    const startNodeElement = document.getElementById(`dfs-node-${startNode}`);
    startNodeElement.style.background = 'linear-gradient(135deg, #48dbfb 0%, #0abde3 100%)';
    startNodeElement.style.border = '3px solid #48dbfb';
    await sleep(animationSpeed);

    while (stack.length > 0 && !found) {
        const currentNode = stack.pop();
        
        if (visited.has(currentNode)) continue;
        
        visited.add(currentNode);
        path.push(currentNode);

        // Highlight current node
        const currentNodeElement = document.getElementById(`dfs-node-${currentNode}`);
        if (currentNode !== startNode) {
            currentNodeElement.style.background = 'linear-gradient(135deg, #ff6b6b 0%, #feca57 100%)';
            currentNodeElement.style.border = '3px solid #ff6b6b';
        }
        await sleep(animationSpeed);

        // Check if we found the target
        if (currentNode === targetNode) {
            currentNodeElement.style.background = 'linear-gradient(135deg, #10ac84 0%, #1dd1a1 100%)';
            currentNodeElement.style.border = '3px solid #10ac84';
            found = true;
            alert(`Target node '${targetNode}' found!\nPath: ${path.join(' → ')}`);
            break;
        }

        // Add neighbors to stack (in reverse order for proper DFS order)
        if (dfsGraph[currentNode]) {
            const neighbors = [...dfsGraph[currentNode]].reverse();
            for (const neighbor of neighbors) {
                if (!visited.has(neighbor)) {
                    stack.push(neighbor);
                    
                    // Highlight the edge to neighbor
                    const edgeElement = document.getElementById(`dfs-edge-${currentNode}-${neighbor}`) || 
                                     document.getElementById(`dfs-edge-${neighbor}-${currentNode}`);
                    if (edgeElement) {
                        edgeElement.style.background = 'linear-gradient(135deg, #feca57 0%, #ff9ff3 100%)';
                        edgeElement.style.height = '5px';
                        await sleep(animationSpeed / 2);
                        edgeElement.style.background = 'rgba(255, 255, 255, 0.4)';
                        edgeElement.style.height = '3px';
                    }
                }
            }
        }

        // Mark node as visited
        if (currentNode !== startNode && !found) {
            currentNodeElement.style.background = 'linear-gradient(135deg, #636e72 0%, #74b9ff 100%)';
            currentNodeElement.style.border = '2px solid #636e72';
        }
    }

    if (!found && targetNode) {
        alert(`Target node '${targetNode}' not found in the graph.\nVisited nodes: ${path.join(' → ')}`);
    } else if (!targetNode) {
        alert(`DFS traversal complete!\nVisited nodes: ${path.join(' → ')}`);
    }

    isAnimating = false;
}

function resetGraphDFS() {
    if (animationTimeout) {
        clearTimeout(animationTimeout);
        animationTimeout = null;
    }
    isAnimating = false;
    renderDFSGraph();
}