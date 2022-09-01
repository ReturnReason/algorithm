#include <bits/stdc++.h>
using namespace std;

int main(){
	ios::sync_with_stdio(0);
  cin.tie(0);
	
	int cnt;
	cin >> cnt;
	
	for(int i= 0; i < cnt; i++){
		list<int> result;
		
		string s;
		cin >> s;
		
		list<int>::iterator cursor = result.begin();
		
		for(char c : s){
			
			if(c == '<'){
				if(result.begin() != cursor){
					cursor--;
				}
			}else if(c == '>'){
				if(result.end() != cursor){
					cursor++;
				}
			}else if(c == '-'){
				if(result.begin() != cursor){
					cursor--;
					cursor = result.erase(cursor);
				}
			}else{
				result.insert(cursor, c);
			}
		}
		
		for(char c : result){
			cout << c ;
		}

		cout << "\n";
	}
	
	return 0;
}