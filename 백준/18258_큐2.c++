#include <bits/stdc++.h>
using namespace std;

queue<int> q;
int N;

int main() {
	ios::sync_with_stdio(0);
	cin.tie(0);
	
	cin >> N;
	while(N--){
		string s;
		cin >> s;
		
		if(s == "push"){
			int i;
			cin >> i;
			q.push(i);
			
		} else if(s == "pop"){
			if(q.size() == 0){
				cout << -1 << "\n";
			} else {
				cout << q.front() << "\n";
				q.pop();
			}
			
		} else if(s == "size"){
			cout << q.size() << "\n";
			
		} else if(s == "empty"){
			if(q.empty()) cout << 1 << "\n";
			else cout << 0 << "\n";
			
		} else if(s == "front"){
			if(q.size() == 0){
				cout << -1 << "\n";
			} else cout << q.front() << "\n";
			
		} else if(s == "back"){
			if(q.size() == 0){
				cout << -1 << "\n";
			} else cout << q.back() << "\n";
		}
	}
}