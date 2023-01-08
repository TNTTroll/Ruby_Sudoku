require "test_helper"

class SudControllerTest < ActionDispatch::IntegrationTest
  test "should get game" do
    get sud_game_url
    assert_response :success
  end
end
