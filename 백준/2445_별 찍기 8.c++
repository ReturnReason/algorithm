#include <bits/stdc++.h>
using namespace std;

int main(){
	std::ios::sync_with_stdio(0);
	std::cin.tie(0);

	int N;
	cin >> N;
	
	for(int i = 1; i < N; i++){
		for(int j = N; j > N - i; j--)
			cout << "*";
		for(int k = 0; k < N * 2 - i * 2; k++)
			cout << " ";
		for(int j = N; j > N - i; j--)
			cout << "*";
			
		cout << "\n";
	}
	
	for(int i = 0; i < N * 2; i++)
		cout << "*";
		
	cout << "\n";
	
	for(int i = 1; i < N; i++){
		
		for(int j = 0; j < N - i; j++)
			cout << "*";
		
		for(int k = N / 2; k < (N / 2) + (i * 2); k++){
			cout << " ";
		}
			
		for(int j = 0; j < N - i; j++)
		cout << "*";
	
		cout << "\n";
	}
	
	return 0;
}