#include <bits/stdc++.h>
using namespace std;

int main(){
	ios::sync_with_stdio(0);
	cin.tie(0);
	
	int N;
	cin >> N;
	
	int cnt[26] = {0, };
	bool pass = false;
	
	for(int i = 0; i<N; i++){
		string s;
		cin >> s;
		cnt[ s[0] - 'a' ]++;
	}  
	
	for(int i = 0; i < 26; i++){
		if(cnt[i] >= 5){
			char c = i + 'a' ;
			cout << c;
			
			pass = true;
		}
	}
	
	if(pass == false) cout << "PREDAJA";
	
	return 0;
}

// 

#include <bits/stdc++.h>
using namespace std;

int main(){
	ios::sync_with_stdio(0);
	cin.tie(0);
	
	int N;
	cin >> N;
	
	int arr[26] = {0, };
	
	for(int i = 0; i < N; i++){
		string s;
		cin >> s;
		
		arr[ s[0] - 'a' ]++;	
	}
	
	
	string ret = "";
	
	for(int i = 0; i < 26; i++){
		if( arr[i] >= 5 ) ret += i + 'a';
	}

	if(ret == "") cout << "PREDAJA";
	else cout << ret;
	
	return 0;
}


/* 2022.12.05 풀이 */
#include <bits/stdc++.h>
using namespace std; 

int N;
bool p = false;
int arr[26];

int main(){
	ios::sync_with_stdio(0);
	cin.tie(0);
	
	cin >> N;
	
	for(int i = 0; i < N; i++){
		string s;
		cin >> s;
		arr[s[0]-'a']++;
	}
	
	for(int i = 0; i < 26; i++){
		if(arr[i] >= 5){
			char c = i + 'a';
			cout << char(c);
			p = true;
		}
	}
	
	if(!p) cout << "PREDAJA";
	
  return 0;
} 