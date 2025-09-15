<script setup>
import { ref } from "vue"
import logo from '~/assets/images/logo.png'
import logo1 from '~/assets/images/logo1.png'

</script>

<template>
<!-- ===== Footer Section ===== -->
 <div>
    <footer class="bg-gray-900 text-gray-300 mt-16">
      <div class="max-w-7xl mx-auto px-6 py-12 space-y-10">
        <!-- First Row -->
        <div class="grid grid-cols-1 md:grid-cols-4 gap-8">
          <!-- Logo + About -->
          <div class="space-y-3">
            <div class="flex items-center space-x-2 ">
              <img :src="logo" alt="NETSOL Logo" class="h-8" />
              <span class="font-bold text-xl text-white">NETSOL</span>
            </div>
            <ul class="space-y-2">
              <li><a href="#" class="hover:text-white">Why NETSOL</a></li>
              <li><a href="#" class="hover:text-white">Board of Directors</a></li>
              <li><a href="#" class="hover:text-white">Management Team</a></li>
              <li><a href="#" class="hover:text-white">Careers</a></li>
            </ul>
          </div>

          <!-- Products -->
          <div>
            <h4 class="font-bold text-white mb-3">Products</h4>
            <ul class="space-y-2">
              <li>Transcend Platform</li>
              <li>Digital Retail</li>
              <li>Intermediary Portals</li>
              <li>Originations</li>
              <li>Servicing</li>
              <li>Wholesale Finance</li>
              <li>Mobility Solutions</li>
            </ul>
          </div>

          <!-- Consultancy -->
          <div>
            <h4 class="font-bold text-white mb-3">Consultancy</h4>
            <ul class="space-y-2">
              <li>Information Security</li>
              <li>Digital Solutions</li>
              <li>AI, ML & Data Analytics</li>
              <li>Generative AI</li>
              <li>Emerging Technologies</li>
              <li>Cloud Services</li>
              <li>Data Engineering</li>
            </ul>
          </div>

          <!-- Solutions -->
          <div>
            <h4 class="font-bold text-white mb-3">Solutions</h4>
            <ul class="space-y-2">
              <li>Asset Finance</li>
              <li>Automotive Finance</li>
              <li>Equipment Finance</li>
            </ul>
          </div>
        </div>

        <!-- Second Row -->
        <div class="grid grid-cols-1 md:grid-cols-4 gap-8">
          <!-- Investor -->
          <div>
            <h4 class="font-bold text-white mb-3">Investor</h4>
            <ul class="space-y-2">
              <li>Company Information</li>
              <li>News</li>
              <li>Stock Data</li>
              <li>SEC Filings</li>
            </ul>
          </div>

          <!-- Marketplace -->
          <div>
            <h4 class="font-bold text-white mb-3">Marketplace</h4>
            <ul class="space-y-2">
              <li>Calculation Engine</li>
              <li>Document Generation</li>
              <li>API Library</li>
              <li>Loan Origination System</li>
              <li>Customer Care Portal</li>
              <li>Tax Calculation Engine</li>
            </ul>
          </div>

          <!-- Insights -->
          <div>
            <h4 class="font-bold text-white mb-3">Insights</h4>
            <ul class="space-y-2">
              <li>Case Studies</li>
              <li>Industries</li>
              <li>Guides</li>
              <li>Blog</li>
              <li>Events</li>
            </ul>
          </div>

          <!-- Contact -->
          <div>
            <h4 class="font-bold text-white mb-3">Contact Us</h4>
            <p>Corporate Headquarters</p>
            <p>Address: 16000 Ventura Blvd, Suite 770<br />Encino, CA 91436, USA</p>
            <p>Phone: +1 818 222 9195</p>

            <h4 class="font-bold text-white mt-4">Connect With Us</h4>
            <div class="flex space-x-4 mt-2">
              <a href="#"><i class="fab fa-x-twitter text-xl"></i></a>
              <a href="#"><i class="fab fa-linkedin text-xl"></i></a>
              <a href="#"><i class="fab fa-facebook text-xl"></i></a>
              <a href="#"><i class="fab fa-youtube text-xl"></i></a>
            </div>
          </div>
        </div>
      </div>

      <!-- Bottom -->
      <div class="bg-black text-gray-400 text-sm py-4 px-6 flex flex-col md:flex-row items-center justify-between">
        <p>© 2025 NETSOL All Rights Reserved.</p>
        <div class="flex space-x-4 mt-2 md:mt-0">
          <a href="#" class="hover:text-white">Terms of Use</a>
          <a href="#" class="hover:text-white">Privacy Policy</a>
          <a href="#" class="hover:text-white">Human Rights Policy</a>
          <a href="#" class="hover:text-white">Modern Slavery Act</a>
        </div>
      </div>
    </footer>
  </div>
</template>
