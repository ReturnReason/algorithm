#include <bits/stdc++.h>
using namespace std;

int main(){
	std::ios::sync_with_stdio(0);
	std::cin.tie(0);

	int N;
	cin >> N;
	
	for(int i = 1; i <= N; i++){
		
		if(i > 1){
			for(int k = 0; k < i - 1; k++)
			cout << " ";
		}
		
		for(int j = N * 2 - i; j >= i; j--)
			cout << "*";
			
		cout << "\n";
	}
	
	for(int i = 1; i < N; i++){
		
		for(int k = 1; k < N - i; k++)
			cout << " ";
		
		for(int j = 1 ; j <= 2 * i + 1 ; j++){
			cout << "*";	
		}
		
		cout << "\n";
}
	
	return 0;
}