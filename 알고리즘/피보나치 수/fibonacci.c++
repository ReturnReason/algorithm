#include <bits/stdc++.h>
using namespace std; 

int fibo(int n){
	if (n == 0 || n == 1) return n;
	return fibo(n - 1) + fibo(n - 2);
}

int main(){
	ios::sync_with_stdio(0);
	cin.tie(0);

	int ret = fibo(8);
	cout << ret << "\n";
	
  return 0;
} 