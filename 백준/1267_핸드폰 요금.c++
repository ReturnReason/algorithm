#include <bits/stdc++.h>
using namespace std;

int main(){
	std::ios::sync_with_stdio(0);
	std::cin.tie(0);

	int N;
	cin >> N;
	
	int Y = 0;
	int M = 0;

	for(int i = 0; i < N; i++){
		int c;
		cin >> c;

		if( c % 30 == 0 ) Y += 10;
		if ( c % 60 == 0) M += 15;

		Y += c / 30 * 10;
		M += c / 60 * 15;
		
		if(c % 30 >= 1) Y += 10;
		if(c % 60 >= 1) M += 15;
		
	}
	
	if(Y == M) cout << "Y" << " " << "M" << " " << Y;
	else if(Y > M) cout << "M" << " " << M;
	else if (M > Y) cout << "Y" << " " << Y;
	
	return 0;
}