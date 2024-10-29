
(define (get-time) (* (runtime) 1000))

(define (timed-prime-test n)
  (start-prime-test n (get-time)))

(define (start-prime-test n start-time)
  (cond ((prime? n) (report-prime n (- (get-time) start-time)))
  (else 0)))

(define (report-prime n elapsed-time)
  (newline)
  (display n)
  (display " *** ")
  (display elapsed-time)
  1
  )

(define (smallest-divisor n) (find-divisor n 2))

(define (find-divisor n test-divisor) 
  (cond ((> (square test-divisor) n) n)
  ((divides? n test-divisor) test-divisor)
  (else (find-divisor n (next test-divisor)))))

(define (divides? a b) 
  (= (remainder a b) 0))  

(define (prime? n) 
  (= n (smallest-divisor n)))  

(define (next n) 
  (cond ((= n 2) 3)
  (else (+ 2 n))))  

(timed-prime-test 1000000000039) 