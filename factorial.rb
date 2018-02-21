# each number is the sum of the multiples of every number prior to it. This is interesting because n! = n * (n-1)!
# ex: factorial 5! => 1 * 2 * 3 * 4 * 5 = 120

def factorial_recursive(num)
  if num == 1 || num == 0
    num
  else
    num * factorial_recursive(num - 1)
  end
end

p "Recursive: #{factorial_recursive(5)}"


def factorial_iterative(num)
  all_nums = (1..num).to_a
  factorial = 1

  all_nums.each do |n|
    factorial *= n
  end
  factorial
end

p "Iterative: #{factorial_iterative(5)}"

