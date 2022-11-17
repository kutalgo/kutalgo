function mergeTwoLists(list1: ListNode | null, list2: ListNode | null): ListNode | null {
    if (list1 === null) return list2;
    if (list2 === null) return list1;

    let res: ListNode;

    if (list1.val < list2.val) {
        res = list1;
        list1 = list1.next;
    } else {
        res = list2;
        list2 = list2.next;
    }

    let cur = res
    while (list1 && list2) {

        if (list1.val < list2.val) {
            cur.next = list1
            list1 = list1.next
        } else {
            cur.next = list2
            list2 = list2.next
        }
        cur = cur.next;
    }

    cur.next = (list1 === null) ? list2 : list1

    return res
};