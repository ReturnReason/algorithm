#include <bits/stdc++.h>
using namespace std;

int dq[ 10005 * 2 + 1];
int head = 10005;
int tail = 10005;

void push_front(int x){
	dq[--head] = x;
}

void push_back(int x){
	dq[tail++] = x;
}

int pop_front(){
	if(tail - head == 0) return -1;
	return dq[head++];
}

int pop_back(){
	if(tail - head == 0) return -1;
	return dq[--tail];
}

int size(){
	return tail - head;
}

int empty(){
	if(tail - head == 0) return 1;
	return 0;
}

int front(){
	if(tail - head == 0) return -1;
	return dq[head];
}

int back(){
	if(tail - head == 0) return -1;
	return dq[tail - 1];
}

int main() {
	ios::sync_with_stdio(0);
	cin.tie(0);

	int N;
	cin >> N;
	
	for(int i = 0; i < N; i++){
		string s;
		cin >> s;
		
		if(s == "push_front"){
			int X;
			cin >> X;
			push_front(X);
		} else if (s == "push_back"){
			int X;
			cin >> X;
			push_back(X);
		} else if( s == "pop_front"){
			cout << pop_front() << "\n";
		} else if ( s == "pop_back"){
			cout << pop_back() << "\n";
		} else if ( s == "size"){
			cout << size() << "\n";
		} else if( s == "empty"){
			cout << empty() << "\n";
		} else if ( s == "front"){
			cout << front() << "\n";
		} else if ( s == "back"){
			cout << back() << "\n";
		}
	}

}