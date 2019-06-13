# takes an integer and returns the sum of its digits, for instance sumdigRecursive(103) returns 4.


def sum_digits_recursive(num)
  digits = num.to_s.split('').map(&:to_i)

  if digits.length == 1
    digits
  else
    sum_digits_recursive(digits[0] + digits[-1])
  end

end

p "Recursive: #{sum_digits_recursive(103).first}"




class Integer
  def to_a
    self.to_s.split('').map(&:to_i)
  end
end

def sum_digits_iterative(num)
  digits = num.to_a.reduce(:+).to_a

  while digits.length > 1
    digits = digits.to_a.reduce(:+).to_a
  end

  digits.first
end

p "Iterative: #{sum_digits_iterative(989)}"


