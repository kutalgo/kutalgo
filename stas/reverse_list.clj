(ns reverse-list
  (:require
   [clojure.test :refer [deftest is]]
  ))

(defn ->list [[x & xs]]
  {:next (when (seq xs) (->list xs))
   :val x})

(defn reverse-list [el]
  (letfn [(rest-list [a b]
            (if-let [c (:next b)]
              (assoc (rest-list b c) :next a)
              (assoc b :next a)))]
    (if-let [b (:next el)]
      (rest-list (assoc el :next nil) b)
      el)))

(deftest reverse-list-test
  (is (= (->list [3]) (reverse-list (->list [3]))))
  (is (= (->list nil) (reverse-list (->list nil))))
  (is (= (->list [1 9]) (reverse-list (->list [9 1]))))
  (is (= nil (reverse-list nil))))

(defn prn-list [el]
  (when el
    (prn (:val el))
    (prn-list (:next el))))

(prn (reverse-list (->list [1 9 8])))

