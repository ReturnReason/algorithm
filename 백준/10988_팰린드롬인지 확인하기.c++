#include <bits/stdc++.h>
using namespace std;

int main(){
	ios::sync_with_stdio(0);
	cin.tie(0);
	
	string s;
	cin >> s;
	
	string copy = s;
	reverse(copy.begin(), copy.end());
	
	bool isPal = false;
	
	for(int i = 0; i < s.size(); i++){

		if(s[i] != copy[i]){
			cout << 0;
			isPal = false;
			break;
		}else{
			isPal = true;
		}
	}
	
	if(isPal) cout << 1;
	
	return 0;
}

/* 2022.12.04 풀이 */
#include <bits/stdc++.h>
using namespace std;

string s;

int main(){
	ios::sync_with_stdio(0);
	cin.tie(0);
	
	cin >> s;
	for(int i = 0; i < s.size()/2; i++){
		if( s[i] != s[s.length() -(i + 1)] ){
			cout << 0;
			return 0;
		}
	}	 
	
	cout << 1;
	return 0;
}