#include <bits/stdc++.h>
using namespace std;

int main () {
	int n;
	cin >> n;
	
	int k = 1;
	for(int i = 1; i <= n; i++){
	
		for(int j = n - i; j > 0; j--){
			cout << " ";
		}

		for(int k=0; k < i; k++){
			cout<<"*";
			
			if(k != 0){
				cout << "*";
			}
		}
		cout << "\n";
	}
	
	
	return 0;
}