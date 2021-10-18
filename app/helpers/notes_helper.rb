module NotesHelper
  def favorite_icon(user, note)
    if user && user.favorite?(note)
      shape = 'fas'
    else
      shape = 'far'
    end
    content_tag(:i, '', class: ['fa-heart', 'favorite_icon', 'text-sm', shape], data: { 'favorite-target': 'icon'})
  end

  def collection_icon(user, note)
    if user && user.collect?(note)
      shape = 'fas'
    else
      shape = 'far'
    end
    content_tag(:i, '', class: ['fa-bookmark', 'collection_icon', 'text-sm', 'cursor-pointer', shape], data: { 'collect-target': 'icon'})
  end

  def day_difference(note)
    t(time_ago_in_words(note.updated_at))
  end

  def publicbtn_display(note)
    if note.public_status && note.user != current_user
    else
      if note.public_status
        link_to is_public_note_path(note),
                class: 'h-8 w-48 border border-blue-600 flex justify-center items-center hover:border-gray-400 group rounded' do
          # content_tag 如要包多個 content_tag 需加 concat，來源：https://gist.github.com/abhilashak/a67eab371c54e1e71e1002f9c2dd791d?fbclid=IwAR1WNpsAtp8bR_AdrRjQycbzgK9PXegBOSdqCsQXPrrq7oo-W1ZNI0GH5vw
          content_tag(:div, '', class: ['flex w-24 relative']) do
            concat(content_tag(:i, '', class: ['fas fa-globe-asia text-sm text-blue-600  flex justify-center items-center group-hover:opacity-0']))
            concat(content_tag(:span, '已公開發表', class: ['w-24 text-sm text-blue-600  group-hover:opacity-0']))
            concat(content_tag(:span, '取消公開發表', class: ['w-24 text-sm text-gray-400 opacity-0 group-hover:opacity-100 absolute']))
          end
        end
      else
        link_to is_public_note_path(note),
                class: 'h-8 w-48 border border-blue-600 flex justify-center items-center bg-blue-600 hover:bg-blue-700 relative rounded' do
          content_tag(:div, '我要公開發表', class: ['w-24 text-sm text-white absolute'])
        end
      end
    end
  end

  def commentbtn_display(comment)
    if comment.user_id == current_user.id
      content_tag(:i, '', class: ['fas fa-ellipsis-v'])
    else
    end
  end
end
