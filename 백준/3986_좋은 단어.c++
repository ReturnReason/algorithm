#include <bits/stdc++.h>
using namespace std;
int n, ret;

int main(){
	ios::sync_with_stdio(0);
	cin.tie(0);

	cin >> n;
	for(int i = 0; i < n; i++){
		string s;
		cin >> s;
		
		stack<char> str;
		for(int j = 0; j < s.size(); j++){
			if(str.empty()){
				str.push(s[j]);
			} else {
				if(str.top() == s[j]){
					str.pop();
				}else{
					str.push(s[j]);
				}
			}
		}
		
		if(str.empty()) ret++;
	}
	
	cout << ret;
	
	return 0;
}