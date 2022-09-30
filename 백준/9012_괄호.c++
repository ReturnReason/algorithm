#include <bits/stdc++.h>
using namespace std; 

int T;

int main(){
	ios::sync_with_stdio(0);
	cin.tie(0);
	
	cin >> T;
	while(T--){
		stack<char> stk;
		string s;
		int isEmpty = 0;
		cin >> s;
		
		for(char c : s){
			if(c == '('){
				stk.push(c);
			} else {
				if(stk.empty()){
					cout << "NO\n";
					isEmpty = 1;
					break;
				}
				stk.pop();
			}
		}

		if(isEmpty) continue;

		if(stk.empty()){
			cout << "YES\n";
		}else {
			cout << "NO\n";
		}
		
	}
  
  return 0;    
}