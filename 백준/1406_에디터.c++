#include <bits/stdc++.h>
using namespace std;

int main(){
	
	string s;
	cin >> s;
	
	list<char> L;
	for(char c : s) L.push_back(c);
	
	list<char>::iterator cursor = L.end();
	
	int M;
	cin >> M;
	
	for(int i = 0; i < M; i++){
		char input;
		cin >> input;
		
		if(input == 'P'){
			char c;
			cin >> c;
			
			L.insert(cursor, c);
		}else if(input == 'L'){
			if(cursor != L.begin()) cursor--;
		}else if(input == 'D'){
			if(cursor != L.end()) cursor++;
		}else if(input == 'B'){
			if(cursor != L.begin()){
				cursor--;
				cursor = L.erase(cursor);
			}
		}
	}
	
	for(char c : L){
		cout << c ;
	}

	return 0;
}