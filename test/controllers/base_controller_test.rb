require "test_helper"

class BaseControllerTest < ActionDispatch::IntegrationTest
  test "should get bord" do
    get base_bord_url
    assert_response :success
  end
end
