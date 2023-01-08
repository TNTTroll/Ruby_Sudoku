require "test_helper"

class MainControllerTest < ActionDispatch::IntegrationTest
  test "should get menu" do
    get main_menu_url
    assert_response :success
  end

  test "should get profile" do
    get main_profile_url
    assert_response :success
  end

  test "should get skin" do
    get main_skin_url
    assert_response :success
  end

  test "should get statistic" do
    get main_statistic_url
    assert_response :success
  end
end
