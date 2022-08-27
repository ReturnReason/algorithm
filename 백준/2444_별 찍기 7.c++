#include <bits/stdc++.h>
using namespace std;

int main(){
	std::ios::sync_with_stdio(0);
	std::cin.tie(0);
	
	int n;
	cin >> n;

	for(int k = 1; k <= n; k++){

		for(int i = n - k; i > 0; i--){
			cout << " ";
		}

		for(int i = 0; i < k ; i++){
			cout << "*";
			
			if(i >= 1) cout << "*";
			
		}
		
		cout << "\n";
			
	}
	
	for(int m = 1; m <= n - 1; m++){
		
		for(int j = 0; j < m; j++){
			cout << " ";
		}
		
		for(int i = 1; i < n * 2 - (2 * m)  ; i++){
			cout << "*";
		}
		
		cout << "\n";
	}

	return 0;
}