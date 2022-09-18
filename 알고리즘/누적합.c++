/* 
 쿼리가 주어졌고 배열이 변함없는 경우
 누적합을 사용한다.

 누적합을 만들 때는 반드시 1번째 요소부터 만들어야 한다.
 0부터 시작시 배열의 인덱스가 -1이 되는 상황이 발생하기 때문이다.
 
 구간 쿼리는 정적 배열, 동적 배열로 구분된다.
 정적 배열일 떄는 구간합, 동적 배열일 때는 트리(세그먼트 트리 또는 펜윅트리) 사용.
*/

#include <bits/stdc++.h>
using namespace std;

int main(){
	ios::sync_with_stdio(0);
	cin.tie(0);
	
	int N, M;
	int arr[N + 4] = {0, };
	int psum[N + 4] = {0, };
	cin >> N >> M;
	
	for(int i = 1; i <= N; i++){
		cin >> arr[i];
		psum[i] = psum[i-1] + arr[i];
	}
	
	for(int i = 0; i < M; i++){
		int a, b;
		cin >> a >> b;
		
		cout << psum[b] - psum[a - 1];
	}

	return 0;
}

