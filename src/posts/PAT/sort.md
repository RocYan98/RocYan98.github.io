---
date: 2023-08-03
tag:
  - PAT	
  - Algorithm
category: PAT
#cover: http://rocyan.oss-cn-hangzhou.aliyuncs.com/notes/y2zb7z.png
order: 3
---

# PAT 排序算法

## [PAT甲级题目整理](https://github.com/RocYan98/PAT)

## 交换排序

### 冒泡排序

```cpp
void bubble_sort() {
    for (int i = 1; i < n; ++i) {
    	bool did_swap = false;
        for (int j = 0; j < n - i; ++j) {
        	if (a[j] > a[j + 1]) {
            	swap(a[j], a[j+1]);
            	did_swap = true;
        	}
        }
        if (!did_swap) return;
    }
}
```

### 快速排序

```cpp
void quick_sort(int left, int right) {
    if (left >= right) return;
    int i = left - 1, j = right + 1, x = a[left + right >> 1];
    while (i < j) {
        do i++; while (a[i] < x);
        do j--; while (a[j] > x);
        if (i < j) swap(a[i], a[j]);
    }
    quick_sort(left, j);
    quick_sort(j + 1, right);
}
```


## 选择排序

### 直接选择排序

```cpp
void select_sort() {
    for (int i = 0; i < n; ++i) {
        int min = i;
        for (int j = i + 1; j < n; ++j) {
            if (a[j] < a[min]) min = j;
        }
        swap(a[i], a[min]);
    }
}
```

### 堆排序

```cpp
void down_adjust(int low, int high) {
    int i = low, j = 2 * low;
    while (j <= high) {
        if (j + 1 <= hgih && a[j + 1] > a[j]) j++;
        if (a[i] < a[j]) {
            swap(a[i], a[j]);
            i = j;
            j = 2 * i;
        } else break;
    }
}

//插入时需要向上调整，数组从1开始
void up_adjust(int low, int high) {
    int i = high, j = high / 2;
    while (j >= low) {
        if (a[i] > a[j]) {
            swap(a[i], a[j]);
            i = j;
            j = i / 2;
        } else break;
    }
}

void create() {
    for (int i = n / 2; i > 0; --i) {
        down_adjust(i, n);
    }
}

void heap_sort() {
    for (int i = n; i > 0; --i) {
        swap(a[i], a[1]);
        down_adjust(1, i - 1);
    }
}
```


##  插入排序

### 直接插入排序

```cpp
void insert_sort() {
    for (int i = 1; i < n; ++i) {
        int j = i, temp = a[i];
        while (j && a[j - 1] > temp) {
            a[j] = a[j - 1];
            j--;
        }
        a[j] = temp;
    }
}
```

### 希尔排序

```cpp
void shell_sort() {
    for (int gap = n / 2; gap >= 1; gap /= 2) {
        for (int i = gap; i < n; ++i) {
            int j = i, temp = a[i];
            while (j - gap >= 0 && a[j - gap] > temp) {
                a[j] = a[j - gap];
                j -= gap;
            }
            a[j] = temp;
        }
    }
}
```


## 归并排序

```cpp
void merge_sort(int left, int right) {
    if (left >= right) return;
    
    int mid = left + right >> 1;
    merge_sort(left, mid);
    merge_sort(mid + 1, right);
    
    int k = 0, i = left, j = mid + 1;
    while (i <= mid && j <= right) {
        if (a[i] < a[j]) tmp[k++] = a[i++];
        else tmp[k++] = a[j++];
    }
    while (i <= mid) tmp[k++] = a[i++];
    while (j <= right) tmp[k++] = a[j++];
    
    for (i = 0; i < k; ++i) a[left + i] = tmp[i];
}
```

## 基数排序（不是基于比较的排序）

## 拓扑排序

```cpp
vector<int> adj[MAX];
int n, indegree[MAX];
int topological_sort() {
    queue<int> q;
    for (int i = 0; i < n; ++i) {
        if (indegree[i] == 0) {
            q.push(i);
        }
    }
    int num = 0;
    while (q.size()) {
        int u = q.front();
        q.pop();
        num++;
        for (int v = 0; v < adj[u].size(); ++v) {
            if (--indegree[v] == 0) q.push(v);
        }
    }
    if (num == n) return 1;
    else return -1;
}
```

