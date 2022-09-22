#include <bits/stdc++.h>
using namespace std;

int main (){
	ios::sync_with_stdio(0);
	cin.tie(0); cout.tie(0);
	
	int N;
	cin >> N;
	
	string pattern;
	cin >> pattern;
	
	int pos = pattern.find("*");
	string start = pattern.substr(0, pos);
	string end = pattern.substr(pos + 1);
	
	
	for(int i = 0; i < N; i++){
		string input;
		cin >> input;
		
		if(start.size() + end.size() > input.size()){
			cout << "NE\n";
		} else if(input.find(start) == 0 && end == input.substr(input.size() - end.size())){
			cout << "DA\n";
			
		} else{
			cout << "NE\n";
		}
		
	}

	return 0;
}