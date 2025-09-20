<template>
  <div class="donation-container">
    <button @click="initiateDonation" class="btn-donate-secure" :disabled="isProcessing">
      <svg v-if="!isProcessing" width="20" height="20" viewBox="0 0 24 24" fill="currentColor" class="heart-icon">
        <path d="M12 21.35l-1.45-1.32C5.4 15.36 2 12.28 2 8.5 2 5.42 4.42 3 7.5 3c1.74 0 3.41.81 4.5 2.09C13.09 3.81 14.76 3 16.5 3 19.58 3 22 5.42 22 8.5c0 3.78-3.4 6.86-8.55 11.54L12 21.35z"/>
      </svg>
      <svg v-else width="20" height="20" viewBox="0 0 24 24" fill="currentColor" class="loading-icon">
        <circle cx="12" cy="12" r="10" stroke="currentColor" stroke-width="4" fill="none" opacity="0.3"/>
        <path d="M12 2 A 10 10 0 0 1 22 12" stroke="currentColor" stroke-width="4" fill="none"/>
      </svg>
      <span v-if="!isProcessing">Support Our Mission</span>
      <span v-else>Processing...</span>
    </button>
    
    <!-- Donation Modal -->
    <div v-if="showModal" class="donation-modal-overlay" @click="closeModal">
      <div class="donation-modal" @click.stop>
        <div class="modal-header">
          <h3>Support IT For Youth Ghana</h3>
          <button @click="closeModal" class="close-btn">&times;</button>
        </div>
        
        <div class="modal-body">
          <p class="donation-message">Your donation helps us provide free technology education to underserved youth in Ghana.</p>
          
          <div class="donation-amounts">
            <button 
              v-for="amount in donationAmounts" 
              :key="amount" 
              @click="selectAmount(amount)"
              :class="['amount-btn', { active: selectedAmount === amount }]"
            >
              GH₵{{ amount }}
            </button>
            <div class="custom-amount">
              <input 
                v-model="customAmount" 
                type="number" 
                placeholder="Custom amount"
                class="custom-input"
                @input="selectCustomAmount"
              >
            </div>
          </div>
          
          <div class="payment-methods">
            <h4>Choose Payment Method</h4>
            <div class="payment-options">
              <button @click="payWithMomo" class="payment-btn momo" :disabled="!selectedAmount">
                <img src="/images/momo-logo.png" alt="Mobile Money" class="payment-logo">
                Mobile Money
              </button>
              <button @click="payWithBank" class="payment-btn bank" :disabled="!selectedAmount">
                <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M2 10v2h20v-2L12 4 2 10zM4 14v4h16v-4H4zm2 2h2v-2H6v2zm4 0h2v-2h-2v2zm4 0h2v-2h-2v2z"/>
                </svg>
                Bank Transfer
              </button>
            </div>
          </div>
          
          <div class="security-info">
            <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor" class="shield-icon">
              <path d="M12,1L3,5V11C3,16.55 6.84,21.74 12,23C17.16,21.74 21,16.55 21,11V5L12,1M10,17L6,13L7.41,11.59L10,14.17L16.59,7.58L18,9L10,17Z"/>
            </svg>
            <span>Secure payment powered by trusted Ghanaian payment providers</span>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref } from 'vue'

const isProcessing = ref(false)
const showModal = ref(false)
const selectedAmount = ref<number | null>(null)
const customAmount = ref('')

const donationAmounts = [50, 100, 200, 500, 1000]

// Ghana-specific payment configuration
const MOMO_API_KEY = 'your-momo-api-key' // Replace with actual MTN/Vodafone API key
const BANK_ACCOUNT = {
  accountName: 'IT For Youth Ghana Foundation',
  accountNumber: '1234567890',
  bank: 'Ghana Commercial Bank',
  branch: 'Accra Main Branch',
  swiftCode: 'GHCBGHAC'
}

const initiateDonation = () => {
  showModal.value = true
}

const closeModal = () => {
  showModal.value = false
  selectedAmount.value = null
  customAmount.value = ''
}

const selectAmount = (amount: number) => {
  selectedAmount.value = amount
  customAmount.value = ''
}

const selectCustomAmount = () => {
  if (customAmount.value) {
    selectedAmount.value = parseFloat(customAmount.value)
  }
}

const payWithMomo = async () => {
  if (!selectedAmount.value) return
  
  isProcessing.value = true
  
  try {
    // Integration with MTN Mobile Money or Vodafone Cash
    const paymentData = {
      amount: selectedAmount.value,
      currency: 'GHS',
      reference: `DONATION_${Date.now()}`,
      description: 'Donation to IT For Youth Ghana',
      callback_url: window.location.origin + '/donation-success'
    }
    
    // Simulate payment initialization (replace with actual API call)
    await new Promise(resolve => setTimeout(resolve, 2000))
    
    // Redirect to Mobile Money payment page
    window.open('https://payments.mtn.com.gh/checkout', '_blank')
    
    closeModal()
  } catch (error) {
    console.error('Payment failed:', error)
    alert('Payment failed. Please try again.')
  } finally {
    isProcessing.value = false
  }
}

const payWithBank = () => {
  if (!selectedAmount.value) return
  
  // Show bank details for manual transfer
  const bankDetails = `
    Account Name: ${BANK_ACCOUNT.accountName}
    Account Number: ${BANK_ACCOUNT.accountNumber}
    Bank: ${BANK_ACCOUNT.bank}
    Branch: ${BANK_ACCOUNT.branch}
    Amount: GH₵${selectedAmount.value}
    Reference: DONATION_${Date.now()}
    
    Please use the reference number when making the transfer.
  `
  
  // Copy to clipboard and show alert
  navigator.clipboard.writeText(bankDetails).then(() => {
    alert('Bank details copied to clipboard! Please complete the transfer using your banking app or visit the bank.')
  })
  
  closeModal()
}
</script>

<style scoped>
.donation-container {
  display: inline-block;
}

.btn-donate-secure {
  display: flex;
  align-items: center;
  gap: 0.75rem;
  padding: 1rem 2rem;
  background: linear-gradient(135deg, #b8860b 0%, #daa520 100%);
  color: white;
  border: none;
  border-radius: 12px;
  font-weight: 500;
  cursor: pointer;
  transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1);
  font-family: -apple-system, BlinkMacSystemFont, 'SF Pro Text', system-ui, sans-serif;
  letter-spacing: -0.01em;
  box-shadow: 0 4px 14px rgba(184, 134, 11, 0.25);
}

.btn-donate-secure:hover:not(:disabled) {
  background: linear-gradient(135deg, #daa520 0%, #b8860b 100%);
  transform: translateY(-2px) scale(1.02);
  box-shadow: 0 8px 25px rgba(184, 134, 11, 0.35);
}

.btn-donate-secure:disabled {
  opacity: 0.7;
  cursor: not-allowed;
  transform: none;
}

.heart-icon {
  animation: heartbeat 2s ease-in-out infinite;
}

.loading-icon {
  animation: spin 1s linear infinite;
}

@keyframes heartbeat {
  0%, 100% { transform: scale(1); }
  50% { transform: scale(1.1); }
}

@keyframes spin {
  from { transform: rotate(0deg); }
  to { transform: rotate(360deg); }
}

.donation-modal-overlay {
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background: rgba(10, 22, 40, 0.8);
  backdrop-filter: blur(8px);
  display: flex;
  align-items: center;
  justify-content: center;
  z-index: 10000;
  padding: 1rem;
}

.donation-modal {
  background: white;
  border-radius: 20px;
  max-width: 500px;
  width: 100%;
  max-height: 90vh;
  overflow-y: auto;
  box-shadow: 0 25px 50px rgba(10, 22, 40, 0.3);
}

.modal-header {
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 2rem 2rem 1rem;
  border-bottom: 1px solid #e2e8f0;
}

.modal-header h3 {
  margin: 0;
  color: #0a1628;
  font-weight: 600;
  font-family: -apple-system, BlinkMacSystemFont, 'SF Pro Display', system-ui, sans-serif;
}

.close-btn {
  background: none;
  border: none;
  font-size: 1.5rem;
  cursor: pointer;
  color: #64748b;
  padding: 0.25rem;
  border-radius: 4px;
  transition: background-color 0.2s;
}

.close-btn:hover {
  background-color: #f1f5f9;
}

.modal-body {
  padding: 1rem 2rem 2rem;
}

.donation-message {
  color: #334155;
  line-height: 1.6;
  margin-bottom: 2rem;
  text-align: center;
}

.donation-amounts {
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 0.75rem;
  margin-bottom: 2rem;
}

.amount-btn {
  padding: 1rem;
  border: 2px solid #e2e8f0;
  border-radius: 12px;
  background: white;
  color: #334155;
  font-weight: 500;
  cursor: pointer;
  transition: all 0.2s;
}

.amount-btn:hover {
  border-color: #0a1628;
}

.amount-btn.active {
  border-color: #0a1628;
  background: #0a1628;
  color: white;
}

.custom-amount {
  grid-column: 1 / -1;
}

.custom-input {
  width: 100%;
  padding: 1rem;
  border: 2px solid #e2e8f0;
  border-radius: 12px;
  font-size: 1rem;
  transition: border-color 0.2s;
}

.custom-input:focus {
  outline: none;
  border-color: #0a1628;
}

.payment-methods h4 {
  color: #0a1628;
  margin-bottom: 1rem;
  font-weight: 600;
}

.payment-options {
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 1rem;
  margin-bottom: 1.5rem;
}

.payment-btn {
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 0.5rem;
  padding: 1rem;
  border: 2px solid #e2e8f0;
  border-radius: 12px;
  background: white;
  color: #334155;
  font-weight: 500;
  cursor: pointer;
  transition: all 0.2s;
}

.payment-btn:hover:not(:disabled) {
  border-color: #0a1628;
  background: #f8fafc;
}

.payment-btn:disabled {
  opacity: 0.5;
  cursor: not-allowed;
}

.payment-logo {
  width: 20px;
  height: 20px;
  object-fit: contain;
}

.security-info {
  display: flex;
  align-items: center;
  gap: 0.5rem;
  padding: 1rem;
  background: #f8fafc;
  border-radius: 8px;
  color: #64748b;
  font-size: 0.875rem;
}

.shield-icon {
  color: #22c55e;
  flex-shrink: 0;
}

@media (max-width: 640px) {
  .donation-amounts {
    grid-template-columns: repeat(2, 1fr);
  }
  
  .payment-options {
    grid-template-columns: 1fr;
  }
  
  .modal-header,
  .modal-body {
    padding-left: 1.5rem;
    padding-right: 1.5rem;
  }
}
</style>