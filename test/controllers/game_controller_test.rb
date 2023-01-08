require "test_helper"

class GameControllerTest < ActionDispatch::IntegrationTest
  test "should get sudoku" do
    get game_sudoku_url
    assert_response :success
  end
end
