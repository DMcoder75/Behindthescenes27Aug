import { supabase } from './supabase.js'

// Sign up function
export const signUp = async (email, password, userData = {}) => {
  try {
    const { data, error } = await supabase.auth.signUp({
      email,
      password,
      options: {
        data: userData
      }
    })

    if (error) throw error

    return { user: data.user, session: data.session, error: null }
  } catch (error) {
    console.error('Error signing up:', error)
    return { user: null, session: null, error }
  }
}

// Sign in function
export const signIn = async (email, password) => {
  try {
    const { data, error } = await supabase.auth.signInWithPassword({
      email,
      password
    })

    if (error) throw error

    return { user: data.user, session: data.session, error: null }
  } catch (error) {
    console.error('Error signing in:', error)
    return { user: null, session: null, error }
  }
}

// Sign out function
export const signOut = async () => {
  try {
    const { error } = await supabase.auth.signOut()
    if (error) throw error
    return { error: null }
  } catch (error) {
    console.error('Error signing out:', error)
    return { error }
  }
}

// Get current user
export const getCurrentUser = async () => {
  try {
    const { data: { user }, error } = await supabase.auth.getUser()
    if (error) throw error
    return { user, error: null }
  } catch (error) {
    console.error('Error getting current user:', error)
    return { user: null, error }
  }
}

// Get current session
export const getCurrentSession = async () => {
  try {
    const { data: { session }, error } = await supabase.auth.getSession()
    if (error) throw error
    return { session, error: null }
  } catch (error) {
    console.error('Error getting current session:', error)
    return { session: null, error }
  }
}

// Listen to auth changes
export const onAuthStateChange = (callback) => {
  return supabase.auth.onAuthStateChange(callback)
}

// Reset password
export const resetPassword = async (email) => {
  try {
    const { error } = await supabase.auth.resetPasswordForEmail(email, {
      redirectTo: `${window.location.origin}/reset-password`
    })
    
    if (error) throw error
    return { error: null }
  } catch (error) {
    console.error('Error resetting password:', error)
    return { error }
  }
}

// Update password
export const updatePassword = async (newPassword) => {
  try {
    const { error } = await supabase.auth.updateUser({
      password: newPassword
    })
    
    if (error) throw error
    return { error: null }
  } catch (error) {
    console.error('Error updating password:', error)
    return { error }
  }
}

// Update user profile
export const updateProfile = async (updates) => {
  try {
    const { error } = await supabase.auth.updateUser({
      data: updates
    })
    
    if (error) throw error
    return { error: null }
  } catch (error) {
    console.error('Error updating profile:', error)
    return { error }
  }
}

