#include <bits/stdc++.h>
using namespace std;

int main () {
	int n;
	cin >> n;
	
	int c = 0;
	
	for(int i=0; i <n; i++){
		
		for(int k = 0; k < i; k++){
			cout << " ";
		}
		
		for(int j =  (2 * n)-1 + c; j > i; j--){
			cout << "*";
		}	
		
		cout << "\n";
		c = c - 1;
	}
	
	return 0;
}