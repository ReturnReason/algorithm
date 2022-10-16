#include <bits/stdc++.h>
using namespace std;

int main() {
	ios::sync_with_stdio(0);
	cin.tie(0);
	
	while(1){
		string s;
		bool isBreak = 0;
		
		getline(cin, s);
		if(s == ".") break;
		
		stack<char> stk;
		
		for(auto c : s){
			if(c == '[' || c == '('){
				stk.push(c);
			} else if ( c == ']' ){
				if ( stk.size() && stk.top() == '[' ){
					stk.pop();
				} else {
					isBreak = 1;
					break;
				}
			} else if ( c == ')'){
				if ( stk.size() && stk.top() == '(' ){
					stk.pop();
				} else {
					isBreak = 1;
					break;
				} 
			}
		}
		
		if(stk.size() || isBreak) {
			cout << "no" << "\n";
		} else cout << "yes" << "\n";
		
	}
	
}