module ApplicationHelper
  def profile_options
    [
      {
        name: "View Profile",
        link: "#"
      },
      {
        name: "Settings",
        link: "#"
      },
      {
        name: "Sign out",
        link: "#"
      }
    ]
  end

  def menu_options
    [
      {
        name: "Notes",
        link: "#"
      },
      {
        name: "Labels",
        link: "#"
      },
      {
        name: "Archive",
        link: "#"
      },
      {
        name: "Trash",
        link: "#"
      }
    ]
  end
end
