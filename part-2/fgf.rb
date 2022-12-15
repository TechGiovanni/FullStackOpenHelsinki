def string(long_string)
  saved_word = []
  # split the sentence or word and convert it into an array
  words = long_string.split(' ')
  if words.length.zero?
    # error handler
    'Please enter a word'
  else
    # loop through each word
    words.each do |word|
      if word.length >= 5
        new_word = word.reverse
        saved_word.push(new_word)
      else
        saved_word.push(word)
      end
    end
    saved_word.join(' ')
  end
end
