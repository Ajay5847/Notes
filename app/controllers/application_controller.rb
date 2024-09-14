class ApplicationController < ActionController::Base
  # Only allow modern browsers supporting webp images, web push, badges, import maps, CSS nesting, and CSS :has.
  allow_browser versions: :modern

  def login_required
    unless user_signed_in?
      flash[:notice] = "Login Required"
      redirect_to root_path
    end
  end

  def after_sign_in_path_for(resource)
    home_path
  end
end
