# find the word that starts with a given letter. Use recursion and the "divide and conquor" method, then do it iteratively

@words = ["aat", "bat", "cat", "dat", "eat", "fat", "gat", "hat", "iat", "jat", "kat", "lat", "mat", "nat", "oat", "pat", "qat", "rat", "sat", "tat", "uat", "vat", "wat", "xat", "yat", "zat"]

def word_finder_recursive(letter)
  start = Time.now

  @words
  middle_word = @words[@words.length/2]
  first_half = @words.shift(@words.length/2)
  second_half = @words

  if middle_word[0] == letter
    finish = Time.now
    p middle_word
    p "recursive difference: #{ ((finish - start) * 10_000).to_i }"
  elsif middle_word[0] < letter
    @words = second_half
    word_finder_recursive(letter)
  else
    @words = first_half
    word_finder_recursive(letter)
  end
end

def word_finder_linear(letter)
  start = Time.now

  @words.each do |word|
    if word[0] == letter
      finish = Time.now
      p "linear difference: #{ ((finish - start) * 10_000).to_i }"
      p word
    end
  end


end

word_finder_recursive('s')
word_finder_linear('s')
