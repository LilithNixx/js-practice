const n= 5; //queue length; 
let queue = [];
let front = -1;
let rear = -1;

function enqueue(x) {
	//Empty queue:
	if (front == -1 && rear == -1){
		rear = 0;
		front = rear;
		queue[rear] = x;
		//Full queue:
	} else if (((rear + 1) % n) == front){
             console.log("Queue is full");   
        } else {
        	//Some elements in the queue:
        	rear = (rear + 1) % n;
        	queue[rear] = x;
        }
	
}

function dequeue(x){
	//Empty queue:
	if (front == -1 && rear == -1){
		rear = 0;
		front = rear;
		queue[rear] = x;
		//Only one element left:
	} else if (front == rear){
           rear = -1;
           front = rear;
           /*if front and rear are in the same position it means that 
           they are both in the last and only element left and they need to go back to -1, 
           that is the beginning of the queue*/
	} else {
		front = (front + 1) & n;
	}
}

function display () {
	let i = front;
	if ( front == -1 && rear == -1){
		console.log("Queue is empty");
	} else {
		while ( i !== rear){
			console.log("Queue is ", queue[i]);
			i = (i+1) % n;
		}
		console.log(queue[rear]);
	}
}

enqueue(1);
enqueue(2);
enqueue(3);
enqueue(4);
enqueue(5);
dequeue(3);
dequeue(4);
enqueue(6);
enqueue(7);
display();