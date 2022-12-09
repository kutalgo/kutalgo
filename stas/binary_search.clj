(ns binary-search)

(defn ->node [val left right parent]
  {:left left
   :right right
   :parent parent
   :val val})

(defn insert
  ([node new-val]
   (insert node new-val nil))
  ([{:keys [left right val] :as node} new-val parent]
   (cond
     (nil? node) (->node new-val nil nil parent)

     (< new-val val)
     (assoc node :left
            (insert left new-val node))

     :else
     (assoc node :right
            (insert right new-val node)))))

(defn print-tree [{:keys [left right val] :as _node}]
  (when left
    (print-tree left))

  (when val (print val ""))

  (when right
    (print-tree right)))

(def nums [5 2 4 9 7 11])
(def tt (reduce insert nil nums))

(comment
  (do (print-tree tt) (prn))

  (prn (sort nums))

  )
