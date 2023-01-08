class BaseController < ApplicationController
  def bord
    if ResultsForUser.find_by_user(current_user.email).nil?
      ResultsForUser.create!(user: current_user.email, time: 1)
    else
      person = ResultsForUser.find_by_user(current_user.email)
      ResultsForUser.find_by_user(current_user.email).update(user: person.user, time: person.time + 1)
    end
  end
end
