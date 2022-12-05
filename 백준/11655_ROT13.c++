#include <bits/stdc++.h>
using namespace std;

int main(){
	ios::sync_with_stdio(0);
	cin.tie(0);
	
	string s;
	getline(cin, s); // 공백 포함 입력받기, c++ string 타입만 가능 

	for(int i = 0; i < s.size(); i++){
		
		if(s[i] >= 97 && s[i] <= 122){
			if(s[i] + 13 >= 123){
				s[i] = s[i] + 13 - 26;
			}else{
				s[i] = s[i] + 13;
			}
		}else if(s[i] >= 65 && s[i] <= 90){
			if(s[i] + 13 >= 91){
				s[i] = s[i] + 13 - 26;
			}else{
				s[i] = s[i] + 13;
			}
		}
		cout << s[i];
	}

	return 0;
}

/* 2022. 12. 06 풀이 */
#include <bits/stdc++.h>
using namespace std; 

string s;

int main(){
	ios::sync_with_stdio(0);
	cin.tie(0);
	
	getline(cin, s);
	
	for(int i; i < s.size(); i++){
		
		if(s[i] >= 65 && s[i] <= 90){
			if(s[i] + 13 > 90){
				s[i] -= 13;
			}else{
				s[i] += 13;
			}
		} else if(s[i] >= 97 && s[i] <= 122 ){
			if(s[i] + 13 > 122){
				s[i] -= 13;
			} else{
				s[i] += 13;
			}
		} 
	}
	
	for(char c : s){	
	cout << c ;
	}
	
  return 0;
} 