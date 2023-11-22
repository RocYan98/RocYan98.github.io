---
date: 2023-08-03
tag:
  - PAT
  - Algorithm
category: PAT
#cover: http://rocyan.oss-cn-hangzhou.aliyuncs.com/notes/y2zb7z.png
order: 2
---

# PAT 基础算法

## [PAT甲级题目整理](https://github.com/RocYan98/PAT)

## 进制转换

```cpp
//p进制转换为十进制
int main() {
    char a[MAX];
    int ans = 0;
    for (int i = 0; i < n; ++i) {
        ans += ans * p + a[i] - '0';
    }
    return 0;
}

//十进制转换为p进制
int main() {
    int ans[MAX], num = 0;
   	do {
        ans[num++] = a % p;
        a /= p;
    } while (a > 0);
    
    for (int i = num - 1; i >= 0; --i) {
        printf("%d", ans[i]);
    }
}
```



## 二分查找

```cpp
int binary_search(int left, int right, int x) {
    while (left <= right) {
        int mid = (left + right) / 2;
        if (a[mid] == x) return mid;
        else if (x < a[mid]) right = mid - 1;
        else left = mid + 1;
    }
    return -1;
}
```

### 快速幂

```cpp
int qpow(int a, int b) {
    if (b == 0) return 1;
    if (b % 2 == 0) {
        int temp = binary_pow(a, b / 2);
        return temp * temp;
    } else {
        return a * binary_pow(a, b - 1);
    }
}

//非递归版
int qpow(int a, int b) {
    int res = 1;
    while (b) {
        if (b % 2) res *= a;
        a *= a;
        b /= 2;
    }
    return res;
}
```



## 最大公约数

```cpp
int gcd(int a, int b) {
    if (b == 0) return a;
    return gcd(b, a % b);
}

int gcd(int a, int b) {
    if (b > a) swap(a, b);
    while (b) {
        a = a % b;
        swap(a, b);
    }
    return a;
}
```



## 最小公倍数

```cpp
int lcm(int a, int b) {
    return a * b / gcd(a, b);
}
```



## 素数

```cpp
bool is_prime(int x) {
    if (x < 2) return false;		
    for (int i = 2; i <= sqrt(x); ++i) {
        if (x % i == 0) return false;
    }
    return true;
}
```



## 组合数

```cpp
方法一:时间复杂度O(n^2)，n=67，m=33时溢出
ll C(ll n, ll m) {
    if (m == 0 || m == n) return 1;
    if (res[n][m]) return res[n][m];
    return res[n][m] = C(n - 1, m) + C(n - 1, m - 1);
}

方法二:时间复杂度O(m)，n=62，m=31时溢出
ll C(ll n, ll m) {
    ll ans = 1;
    for (ll i = 1; i <= m; ++i) ans = ans * (n - m + i) / i;
    return ans;
}
```



## 高精度加法

```cpp
vector<int> add(const vector<int> &A, const vector<int> &B) {
    if (A.size() < B.size()) return add(B, A);
    vector<int> C;
    int tmp = 0;
    for (int i = 0; i < A.size(); ++i) {
        tmp += A[i];
        if (i < B.size()) tmp += B[i];
        C.push_back(tmp % 10);
        tmp /= 10;
    }
    if (tmp) C.push_back(tmp);
    return C;
}

int main() {
    string a, b;
    vector<int> A, B;
    cin >> a >> b;
    for (auto ite = a.rbegin(); ite != a.rend(); ++ite) A.push_back(*ite - '0');
    for (auto ite = b.rbegin(); ite != b.rend(); ++ite) B.push_back(*ite - '0');

    auto C = add(A, B);
    for (auto ite = C.rbegin(); ite != C.rend(); ++ite) cout << *ite;
    return 0;
}
```



## 高精度减法

```cpp
bool cmp(const vector<int> &A, const vector<int> &B) {
    if (A.size() != B.size()) return A.size() > B.size();
    for (int i = A.size() - 1; i >= 0; --i) {
        if (A[i] != B[i]) return A[i] > B[i];
    }
    return true;
}

vector<int> sub(const vector<int> &A, const vector<int> &B) {
    vector<int> C;
    int tmp = 0;
    for (int i = 0; i < A.size(); ++i) {
        tmp += A[i];
        if (i < B.size()) tmp -= B[i];
        C.push_back((tmp + 10) % 10);
        if (tmp < 0) tmp = -1;
        else tmp = 0;
    }
    while (C.size() > 1 && C.back() == 0) C.pop_back();
    return C;
}

int main() {
    string a, b;
    cin >> a >> b;
    vector<int> A, B;
    for (auto ite = a.rbegin(); ite != a.rend(); ++ite) A.push_back(*ite - '0');
    for (auto ite = b.rbegin(); ite != b.rend(); ++ite) B.push_back(*ite - '0');
    
    vector<int> C;
    if (cmp(A, B)) C = sub(A, B);
    else {
        C = sub(B, A);
        cout << "-";
    }
    for (auto ite = C.rbegin(); ite != C.rend(); ++ite) cout << *ite;
    return 0;
}
```



## 高精度乘法

```cpp
vector<int> mul(const vector<int> &A, int b) {
    vector<int> C;
    int tmp = 0;
    for (int i = 0; i < A.size() || tmp; ++i) {
        if (i < A.size()) tmp += A[i] * b;
        C.push_back(tmp % 10);
        tmp /= 10;
    }
    while (C.size() > 1 && C.back() == 0) C.pop_back();
    return C;
}

int main() {
    int b;
    string a;
    vector<int> A;
    cin >> a >> b;
    for (auto ite = a.rbegin(); ite != a.rend(); ++ite) A.push_back(*ite - '0');
    
    vector<int> C = mul(A, b);
    for (auto ite = C.rbegin(); ite != C.rend(); ++ite) cout << *ite;
    return 0;
}
```



## 差分

```cpp
void insert(int l, int r, int c) {
    b[l] += c;
    b[r + 1] -= c;
}

int main() {
    scanf("%d%d", &n, &m);
    for (int i = 1; i <= n; i++) {
        scanf("%d", &a[i]);
        insert(i, i, a[i]);
    }    

    while (m--) {
        int l, r, c;
        scanf("%d%d%d", &l, &r, &c);
        insert(l, r, c);
    }
    
    for (int i = 1; i <= n; i++) {
        b[i] += b[i - 1];
        printf("%d ", b[i]);
    }

    return 0;
}
```



## 差分矩阵

```cpp
void insert(int x1, int y1, int x2, int y2, int c) {
    b[x1][y1] += c;
    b[x2 + 1][y1] -= c;
    b[x1][y2 + 1] -= c;
    b[x2 + 1][y2 + 1] += c;
}

int main() {
    scanf("%d%d%d", &n, &m, &q);

    for (int i = 1; i <= n; i ++ ) {
        for (int j = 1; j <= m; j ++ ) {
            scanf("%d", &a[i][j]);
            insert(i, j, i, j, a[i][j]);
        }
	}

    while (q -- ) {
        int x1, y1, x2, y2, c;
        cin >> x1 >> y1 >> x2 >> y2 >> c;
        insert(x1, y1, x2, y2, c);
    }

    for (int i = 1; i <= n; ++i) {
        for (int j = 1; j <= m; ++j) {
            b[i][j] += b[i - 1][j] + b[i][j - 1] - b[i - 1][j - 1];
            printf("%d ", b[i][j]);
        }
        printf("\n");
    }

    return 0;
}
```



