# returns true if a given string is a palindrome. Hint: strings with zero or 1 letters are always palindromes. Note: Do not use the reverse method... too easy!

def palindrome_recursive(word)
  if word.length == 1 || word.length == 0
    true
  elsif word[0] == word[-1]
    palindrome_recursive(word[1..-2])
  else
    false
  end
end


def palindrome_iterative(word)
  letters = word.chars
  result = true
  end_i = -1
  letters.each do |letter|
    result = false if letter != word[end_i]
    end_i -= 1
  end
  result
end


input = 'tacocat'
p "Recursive: #{input} is a palindrome? => #{palindrome_recursive(input)}"
p "Iterative: #{input} is a palindrome? => #{palindrome_iterative(input)}"
