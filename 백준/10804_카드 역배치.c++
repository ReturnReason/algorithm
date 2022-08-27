#include <bits/stdc++.h>
using namespace std;

int main(){
	std::ios::sync_with_stdio(0);
	std::cin.tie(0);

	vector<int> v = { 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20};
	
	int n, m;
	
	for(int i = 0; i < 10; i++){
		cin >> n >> m;
		reverse(v.begin() + n - 1 , v.begin()+m);
	}
	
	for(int i : v) cout << i <<" ";

	return 0;
}