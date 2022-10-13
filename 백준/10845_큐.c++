#include <bits/stdc++.h>
using namespace std;

int q[1000005];
int head = 0;
int tail = 0;

void push(int x){
	q[tail] = x;
	tail++;
}

int pop(){
	if(head == tail) return -1;
	return q[head++];
}

int size(){
	return tail - head;
}

int empty(){
	if(tail == head) return 1;
	return 0;
}

int front(){
	if(tail == head) return -1;
	return q[head];
}

int back(){
	if(tail == head) return -1;
	return q[tail - 1];
}


int main() {
	ios::sync_with_stdio(0);
	cin.tie(0);
	
	int N;
	cin >> N;
	
	for(int i = 0; i < N; i++){
		string s;
		cin >> s;
		
		if(s == "push"){
			int x;
			cin >> x;
			push(x);
		} else if (s == "pop"){
			cout << pop() << "\n";
		} else if ( s == "size"){
			cout << size() << "\n";
		} else if ( s == "empty"){
			cout << empty() << "\n";
		} else if ( s == "front"){
			cout << front() << "\n";
		} else if ( s == "back"){
			cout << back() << "\n";
		}
	}
	
}