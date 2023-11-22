---
date: 2023-08-03
tag:
  - PAT
  - Algorithm
category: PAT
#cover: http://rocyan.oss-cn-hangzhou.aliyuncs.com/notes/y2zb7z.png
order: 4
---

# PAT 高级算法

## [PAT甲级题目整理](https://github.com/RocYan98/PAT)

## BFS

```cpp
void BFS(int s) {
    queue<int> q;
    q.push(s);
    while (q.size()) {
        //1.取出队首元素
        //2.队首元素出队
        //3.访问队首元素
        //4.将下一层节点没有入过队的元素入队
    }
}
```



## Dijkstra算法

```cpp
const int INF = 0x3f3f3f3f;
int adj[MAX][MAX], d[MAX];
int vis[MAX];

void Dijkstra(int s) {
    memset(d, 0x3f, sizeof d);
    d[s] = 0;
    for (int i = 0; i < MAX; ++i) {
        int min = INF, u = -1;
        for (int j = 0; j < MAX; ++j) {
            if (vis[j] == 0 && d[j] < min) {
                min = d[s];
                u = j;
            }
        }
        
        if (u == -1) return;
        vis[u] = 1;
        for (int v = 0; v < MAX; ++v) {
            if (adj[u][v] != INF && vis[v] == 0) {
                if (d[u] + adj[u][v] < d[v]) {
                    d[v] = d[u] + adj[u][v];
                }
            }
        }
    }
}
```



## Bellman-Ford算法

```cpp
const int INF = 1000000000;
struct Node {
    int v, dis;
}
vector<Node> adj[MAX];
int d[MAX];

bool bellman(int s) {
    fill(d, d + MAX, INF);
    d[s] = 0;
    for (int i = 0; i < n - 1; ++i) {
        for (int u = 0; u < n; ++u) {
            for (int j = 0; j < adj[u].size(); ++j) {
                int v = adj[u][j].v;
                int dis = adj[u][j].dis;
                if (d[u] + dis < d[v]) {
                    d[v] = d[u] + dis;
                }
            }
        }
    }
    for (int u = 0; u < n; ++u) {
        for (int j = 0; j < adj[u].size(); ++j) {
            int v = adj[u][j].v;
            int dis = adj[u][j].dis;
            if (d[u] + dis < d[v]) return false;
        }
    }
    return true;
}
```



## SPFA

```cpp
const int INF = 1000000000;
struct Node {
    int v, dis;
}
vector<Node> adj[MAX];
int d[MAX];
int inq[MAX] = {0}, num[MAX] = {0};

bool SPFA(int s) {
    fill(d, d + MAX, INF);
    queue<int> q;
    q.push(s);
    inq[s] = 1;
    num[s]++;
    while (q.size()) {
        int u = q.front();
        q.pop();
        inq[u] = 0;
        for (int i = 0; i < adj[u].size(); ++i) {
            int v = adj[u][i].v;
            int dis = adj[u][i].dis;
            if (d[u] + dis < d[v]) {
                d[v] = d[u] + dis;
                if (inq[v] == 0) {
                    q.push(v);
                    inq[v] = 1;
                    num[v]++;
                    if (num[v] >= n) return false;
                }
            }
        }
    }
   return true;
}
```



## Floyd算法

```cpp
const int INF = 1000000000;
int dis[MAX][MAX];

void floyd() {
    for (int i = 0; i < MAX; ++i) {
        dis[i][i] = 0;
    }
    for (int k = 0; k < n; ++k) {
        for (int i = 0; i < n; ++i) {
            for (int j = 0; j < n; ++j) {
                if (dis[i][k] != INF && dis[k][j] != INF && dis[i][k] + dis[k][j] < dis[i][j]){
                    dis[i][j]= dis[i][k] + dis[k][j];
                }
            }
        }
    }
}
```



## Prim算法

```cpp
const int INF = 1000000000;
int adj[MAX][MAX], d[MAX];
int vis[MAX] = {0};

int prim(int s) {
    int ans = 0;
    fill(d, d + MAX, INF);
    d[s] = 0;
    for (int i = 0; i < n; ++i) {
        int min = INF, u = -1;
        for (int j = 0; j < n; ++j) {
            if (vis[j] == 0 && d[j] < min) {
                min = d[j];
                u = j;
            }
        }
        if (u = -1) return -1;
        vis[u] = 1;
        ans += d[u];
        for (int v = 0; v < n; ++v) {
            if (adj[u][v] != INF && vis[v] == 0 && adj[u][v] < d[v]) {
                d[v] = adj[u][v];
            }
        }
    }
    return ans;
}
```



## Kruskal算法

```cpp
struct Edge {
    int u, v;
    int cost;
} e[MAX];
int father[MAX];

bool cmp(Edge a, Edge b) {
    return a.cost < b.cost;
}

int find_father(int x) {
    int a = x;
    while (x != father[x]) {
        x = father[x];
    }
    while (a != father[a]) {
        int z = a;
        a = father[a];
        father[z] = x;
    }
    return x;
}

//n为顶点个数，m为边的个数
int kruskal() {
    int ans = 0, num = 0;
    for (int i = 0; i < n; ++i) {
        father[i] = i;
    }
    sort(e, e + m, cmp);
    for (int i = 0; i < m; ++i) {
        int fa = find_father(e[i].u);
        int fb = find_father(e[i].v);
        if (fa != fb) {
            father[fa] = fb;
            ans += e[i].cost;
            num++;
            if (num == n - 1) break;
        }
    }
    if (num == n - 1) return ans;
    else return -1;
}
```



# 动态规划DP

## 线性DP（状态计算一般是看最后一步）

### 数字三角形

```cpp
//自底向上走，还可以用滚动数组进行优化
int main() {
    int n;
    int a[N][N], dp[N][N]//a[i][j]表示第i行第j列上的数字，dp[i][j]表示从[N][N]点到[i][j]点的所有路径中数字和最大的值
    for (int i = 1; i <= n; ++i)
        for (int j = 1; j <= i; ++j) dp[i][j] = -INF;
    for (int i = 1; i <= n; ++i) 
        for (int j = 1; j <= i; ++j) {
            scanf("%d", &a[i][j]);
            if (i == n) dp[i][j] = a[i][j];
        }  
    for (int i = n - 1; i >= 1; --i)
        for (int j = 1; j <= i; ++j)
            f[i][j] = max(a[i][j] + dp[i + 1][j], a[i][j] + dp[i + 1][j + 1]);
}
```



### 最大连续子序列和

```cpp
int main() {
    int n;
    int a[N], dp[n];//a[i]表示第i个数的值，dp[i]表示所有以第i个数字结尾的连续子序列中子序列和的最大值
    dp[0] = a[0];
    for (int i = 1; i < n; ++i) {
        dp[i] = max(dp[i - 1] + a[i], a[i]);
    }
	return 0;
}
```



### 最长上升子序列

```cpp
int main() {
    int n;
    int a[N], dp[N];//a[i]表示第i个数的值，dp[i]表示所有以第i个数字结尾的上升子序列中子序列长度的最大值
    for (int i = 1; i <= n; ++i) {
        dp[i] = 1;
    }

    for (int i = 2; i <= n; ++i) 
        for (int j = i - 1; j > 0; --j)
            if (a[i] > a[j]) dp[i] = max(dp[i], dp[j] + 1);
    
    int ans = 0;
    for (int i = 1; i <= n; ++i) ans = max(ans, dp[i]);
    return 0;
}
```



### 最长公共子序列

```cpp
//字符不可重复
int main() {
    int dp[N][M];//dp[i][j]表示所有字符串a的前i个字母和字符串b的前j个字母中的所有公共子序列中子序列长度的最大值
    for (int i = 1; i <= n; ++i) {
        for (int j = 1; j <= m; ++j) {
            if (a[i] == b[j]) dp[i][j] = dp[i - 1][j - 1] + 1;
            else dp[i][j] = max(dp[i - 1][j], dp[i][j - 1]);
        }
    }
    return 0;
}

//字符可重复
int main() {
    for (int i = 1; i <= a.size(); ++i) {
        for (int j = 1; j <= b.size(); ++j) {
            if (a[i] == b[j]) dp[i][j] = dp[i][j - 1] + 1;
            else dp[i][j] = max(dp[i - 1][j], dp[i][j - 1]);
        }
    }
    return 0;
}
```



### 最长公共子串

```cpp
//最长公共子串是连续的，二最长公共子序列是不用连续的
int main() {
    int dp[N][M];
    for (int i = 1; i <= n; ++i) {
        for (int j = 1; j <= m; ++j) {
            if (a[i] == b[j]) dp[i][j] = dp[i - 1][j - 1] + 1;
        }
    }
    return 0;
}
```



### 编辑距离

```cpp
int main() {
    int n, m, dp[N][N];//dp[i][j]表示字符串a的第i个字符编辑到字符串b到第j个字符的所有操作中操作次数最少的值
    for (int i = 1; i <= n; ++i) {
        dp[i][0] = i;
    }
    for (int j = 1; j <= m; ++j) {
        dp[0][j] = j;
    }
    for (int i = 1; i <= n; ++i) {
        for (int j = 1; j <= m; ++j) {
			dp[i][j] = min(dp[i - 1][j] + 1, dp[i][j - 1] + 1);//删除和增加
			dp[i][j] = min(dp[i][j], dp[i - 1][j - 1] + (a[i] != b[j]));//是否需要修改，需要修改则加1
        }
    }
    return 0;
}

```



## 区间DP（状态计算一般通过枚举区间的分割点）

### 石子合并

```cpp
int main() {
    int n;
    int s[N], dp[N][N];//dp[i][j]表示所有将第i堆石子到第j堆石子合并成一堆的所有合并方式中代价最小的值
    for (int i = 1; i <= n; ++i) s[i] += s[i - 1];//前缀和
    
    for (int len = 2; len <= n; ++len) {//区间dp通常枚举区间长度
        for (int i = 1; i + len - 1 <= n; ++i) {
            int j = i + len - 1;
            dp[i][j] = INF;
            for (int k = i; k < j; ++k) {//从第k个位置（第k个位置属于左堆）将石子分为左右两堆
                dp[i][j] = min(dp[i][j], dp[i][k] + dp[k + 1][j] + s[j] - s[i - 1]);
            }
        }
    }
}
```



### 最长回文子串

```cpp
int main() {
    char str[N];
    int dp[N][N];//dp[i][j]表示字符串str的i到j是否是回文串，是为1，不是则为0
    int ans = 1;
    int len = strlen(str + 1);
    for (int i = 1; i <= len; ++i) {
        dp[i][i] = 1;
        if (i + 1 <= len && str[i] == str[i + 1]) {
            dp[i][i + 1] = 1;
            ans = 2;
        }
    }
    for (int l = 3; l <= len; ++l) {
        for (int i = 1; i + l - 1 <= len; ++i) {
            int j = i + l - 1;
            if (str[i] == str[j] && dp[i + 1][j - 1] == 1) {
                dp[i][j] = 1;
                ans = l;
            }
        }
    }
}
```



### DAG最长路

- dp[i]表示以i出发点能获取的最长路径

```cpp
int dp[MAX] = {0};
int DP(int i) {
    if (dp[i] > 0) return dp[i];
    for (int j = 0; j < n; ++j) {
        if (adj[i][j] ！= INF) {
            dp[i] = max(dp[i], DP[j] + adj[i][j]);
        }
    }
    return dp[i];
} 
```



- dp[i]表示以i为出发到达T的最长路径

```cpp
int vis[MAX] = {0};
int dp[MAX];
int DP(int i) {
    if (vis[i]) return dp[i];
    vis[i] = 1;
    for (int j = 0; j < n; ++j) {
        if (adj[i][j] != INF) {
            dp[i] = max(dp[i], DP[j] + adj[i][j]);
        }
    }
    return dp[i];
}

int main() {
    fill(dp, dp + MAX, -1000000000);
    dp[T] = 0;
    return 0;
}
```



## 背包问题（一般判断第i个物品拿不拿或拿几个）

### 01背包问题 

```cpp
//朴素版
int main() {
    int n, m;//n表示物品总数，m表示背包最大容量
    int v[N], w[N], dp[N][N];//v[i]表示物品重量，w[i]表示物品价值
    for (int i = 1; i <= n; ++i) {
        for (int j = 1; j <= m; ++j) {
            dp[i][j] = dp[i - 1][j];
            if (j - v[i] >= 0) dp[i][j] = max(dp[i][j], dp[i - 1][j - v[i]] + w[i]);
        }
    }
}

//进阶版（滚动数组优化）
int main() {
    int n, m;
    int v[N], w[N], dp[N];
    for (int i = 1; i <= n; ++i) {
        for (int j = m; j >= v[i]; --j) { //j要降序
            dp[j] = max(dp[j], dp[j - v[i]] + w[i]);
        }
    }
}
```

```cpp
j要逆序的原因：在没去掉i时dp[i][j] = max(dp[i][j], dp[i - 1][j - v[i]] + w[i])注意第二项是i - 1而不是i，因此实际上dp[i][j]是要和上一轮dp[i - 1][j]作比较，取两者中的最大值。
1. 如果j是升序，那么j - v[i]是一定先被更新掉后再到j，那么实际上就是和本轮作比较，即等价于
	dp[i][j] = max(dp[i][j], dp[i][j - v[i] + w[i]])这是错误的。
2. 如果j是降序，那么当更新到j时，j - v[i]还没有被更新到，此时实际上就是和上一轮做比较。
```



### 完全背包问题（一次进阶版，朴素版O($$n^3$$)时间复杂度太高，最终版只是省下空间复杂度没必要）

```cpp
//朴素版
int main() {
    int n, m;//n表示物品总数，m表示背包最大容量
    int v[N], w[N], dp[N][N];//v[i]表示物品重量，w[i]表示物品价值
    for (int i = 1; i <= n; ++i) {
        for (int j = 1; j <= m; ++j) {
            for (int k = 0;  j - k * v[i] >= 0; ++k) {
                dp[i][j] = max(dp[i][j], dp[i - 1][j - k * v[i]] + k * w[i]);
            }
        }
    }
}

//进阶版
int main() {
    int n, m;
    int v[N], w[N], dp[N][N];
    for (int i = 1; i <= n; ++i) {
        for (int j = 1; j <= m; ++j) {
            dp[i][j] = dp[i - 1][j];
            if (j - v[i] >= 0) dp[i][j] = max(dp[i][j], dp[i][j - v[i]] + w[i]);
        }
    }
}

//最终版（滚动数组优化）
int main() {
    int n, m;
    int v[N], w[N], dp[N];
    for (int i = 1; i <= n; ++i) {
        for (int j = v[i]; j <= m; ++j) {
            dp[j] = max(dp[j], dp[j - v[i]] + w[i]);
        }
    }
}
```

```cpp
从朴素版到进阶版的原理：
dp[i][j] = max{dp[i - 1][j], dp[i - 1][j - v] + w, dp[i - 1][j - 2v] + 2w, ...,dp[i - 1][j - kv] + kw}
dp[i][j - v] = max{dp[i - 1][j - v], dp[i - 1][j - 2v] + w, ..., dp[i - 1][j - kv] + (k - 1)w}
可以发现dp[i][j]就比dp[i][j - v]多一项dp[i - 1][j]并且其余每项多一个w，因此dp[i][j] = max(dp[i - 1][j], dp[i][j -v])
因此直接可以省去一轮k的循环
```



### 多重背包问题

```cpp
//朴素版
int main() {
    int n, m;//n表示物品总数，m表示背包最大容量
    int v[N], w[N], s[N], dp[N][N];//v[i]表示物品重量，w[i]表示物品价值，s[i]表示物品的数量
    for (int i = 1; i <= n; ++i) {
        for (int j = 1; j <= m; ++j) {
            for (int k = 0; k <= s[i] && j - k * v[i] >= 0; ++k) {
                dp[i][j] = max(dp[i][j], dp[i - 1][j - k * v[i]] + k * w[i]);
            }
        }
    }
}

//进阶版（二进制优化）
int main() {
    int n, m, cnt = 0;//n表示物品总数，m表示背包最大容量，cnt表示分组后的物品组数
    int v[N], w[N], dp[M];//N表示最多的分组数; M表示背包的最大容量
    while (n--) {
        int a, b, s;
        scanf("%d%d%d", &a, &b, &s);
        for (int i = 1; i <= s; i *= 2) {
            cnt++;
            v[cnt] = i * a;
            w[cnt] = i * b;
            s -= i;
        }
        if (s) {
            cnt++;
            v[cnt] = s * a;
            w[cnt] = s * b;
        }
    }
    n = cnt;
    for (int i = 1; i <= n; ++i) {
        for (int j = m; j >= v[i]; --j) {
            f[j] = max(f[j], f[j - v[i]] + w[i]);
        }
    }
}
```



### 分组背包问题

```cpp
//朴素版
int main() {
    int n, m, dp[N][N];//n表示物品总数，m表示背包最大容量
    vector<int> v[N], w[N];//v[i][j]表示第i组第j个物品重量，w[i][j]表示第i组第j个物品价值  
    for (int i = 1; i <= n; ++i) {
        for (int j = 1; j <= m; ++j) {
            f[i][j] = f[i - 1][j];
            for (int k = 0; k < v[i].size(); ++k) {
                if (j - v[i][k] >= 0) f[i][j] = max(f[i][j], f[i - 1][j - v[i][k]] + w[i][k]);
            }
        }
    }
    
    printf("%d", f[n][m]);
}

//进阶版（滚动数组优化）
int main() {
    int n, m, dp[N];
    vector<int> v[N], w[N];
    for (int i = 1; i <= n; ++i) {
        for (int j = m; j >= 1; --j) {
            for (int k = 0; k < v[i].size(); ++k) {
                if (j - v[i][k] >= 0) f[j] = max(f[j], f[j - v[i][k]] + w[i][k]);
            }
        }
    }
}
```



## 计数类DP

### 整数划分

- 完全背包解法

```cpp
//朴素版
int main() {
    int n;
    int dp[N][N];//dp[i][j]表示从前i个数中选，总体积恰好等于j的方案的数量
    for (int i = 1; i <= n; ++i) {
        dp[i][0] = 1;
        dp[1][i] = 1;
    }
    for (int i = 2; i <= n; ++i) {
        for (int j = 1; j <= n; ++j) {
            for (int k = 0; i * k <= j; ++k) {
                dp[i][j] = (dp[i][j] + dp[i - 1][j - k * i]) % mod;//一般数会很大，会有取余操作，分开取和求完再取结果是一样的
            }
        }
    }
}

//进阶版
int main() {
    int n;
    int dp[N][N];
    for (int i = 1; i <= n; ++i) {
        dp[i][0] = 1;
        dp[1][i] = 1;
    }
    for (int i = 2; i <= n; ++i) {
        for (int j = 1; j <= n; ++j) {
            if (j - i >= 0) dp[i][j] = (dp[i - 1][j] + dp[i][j - i]) % mod;
            else dp[i][j] = dp[i - 1][j] % mod;
        }
    }
}

//最终版（滚动数组优化）
int main() {
    int n;
    int dp[N];
    dp[0] = 1;
    for (int i = 2; i <= n; ++i) {
        for (int j = i; j <= n; ++j) {
			dp[j] = (dp[j] + dp[j - i]) % mod;
        }
    }
}
```

```cpp
从朴素版到进阶版的原理：
dp[i][j] = f[i - 1][j] + f[i - 1][j - i] + f[i - 1][j - 2 * i] + ... + f[i - 1][j - k * i]
dp[i][j - i] = 			 f[i - 1][j - i] + f[i - 1][j - 2 * i] + ... + f[i - 1][j - k * i]
由上面两个等式可以推出dp[i][j] = f[i - 1][j] + dp[i][j - i]
```



## 树型DP

```cpp
int a[N], dp[N][2];//dp[i][0/1]表示所有从以i为根的子树中选，且不选/选i的方案中值最大的方案
vector<int> node[N];

void dfs(int root) {
    dp[root][1] = a[root];
    for (int child : node[root]) dfs(child);
    
    for (int child : node[root]) {
        dp[root][0] += max(dp[child][0], dp[child][1]);
        dp[root][1] += dp[child][0];
    }
}

int main() {
    dfs(root);
    printf("%d", max(dp[root][0], dp[root][1]));
}
```



## KMP算法

- next[i]是字符串[0, i]区间前后缀相同时前缀的最后一位

```cpp
void get_next(string str) {
    int j = -1;
    ne[0] = -1;
    for (int i = 1; i < str.size(); ++i) {
        while (j != -1 && str[i] != str[j + 1]) {
            j = ne[j];
        }
        if (str[i] == str[j + 1]) {
            j++;
        }
        ne[i] = j;
    }
}

bool kmp(string text, string pattern) {
    get_next(pattern);
    int j = -1;
    for (int i = 0; i < text.size(); ++i) {
        while (j != -1 && text[i] != pattern[j + 1]) {
            j = ne[j];
        }
        if (text[i] == pattern[j + 1]) {
            j++;
        }
        if (j == pattern.size() - 1) return true;
    }
    return false;
}
```



## 树状数组

```cpp
#define lowbit(x) ((x) & (-x)) //返回x的二进制最右一位1, 比如x的二进制为10100, lowbit(x)返回100
int c[MAX]; //树状数组，数组从1开始

int get_sum(int x) {
    int sum = 0;
    for (int i = x; i > 0; i -= lowbit(i)) {
        sum += c[i];
    }
    return sum;
}

void update(int x, int v) {
    for (int i = x; i < MAX; i += lowbit(i)) {
        c[i] += v;
    }
}
```

