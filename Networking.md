# What is Networking?

networking is practice of connecting multiple devices or computers to share information and resources.
**Importance of Networkin:**

1. Global Connectivity
2. Efficiency & Productivity
3. Information Sharing
4. Economic Impact
5. Innovation

## Types of Networks

1. PAN (Personal Area Network)
   - PAN connects electronic devices within a user's immediate area
   - size of PAN (few cm to a few m)
   - common usage of PAN is connection between Bluetooth earpiece and a smartphone
   - wired (USB, Firewire)
   - wireless (Bluetooth, Wifi, IrDA, ZigBee)
2. LAN (Local Area Network)
   - collection of devcices connected together in one physical location such as a building, office or home
   - it can be small or large (home network vs enterpise network)
   - size/distance (several m up to 2 km)
   - LAN is used for: home networks, school networks, libraries, office, college...
3. MAN (Metropolitan Area Network)
   - larger than LAN but smaller than WAN
   - network that connects computers over a geographical distance through a shared communication path over a city, town or metropolitan area
   - it uses FDDI, CDDI and ATM as the technology with a range from 5km to 50km.
   - difficult to maintain and comes with a high cost
4. WAN (Wide Area Network)
   - large network of information that is not tied to a single location
   - WANs can facilitate communication, sharing of information between devices around the world thourgh a WAN provided
   - Internet is condisered thelargest WAN in the world
   - very difficult to maintain
5. WLANS (Wireless Local Area Network)
6. SAN (Storage Area Network)
7. VPN (Virtual Private Network)

## LAN vs WAN

for LAN

1. LAN (Local Area Network) - Typically found in homes, offices, schools, libraries or in other smaller places.
2. Designed for connecting device like computers, printeras and servers in a close proximity environtment.
3. LAN offer higher data transfer speeds and bandwith compared to WANs. This is becasue LANs are designed for local and internal use, allowing faste communication between devices
4. LANs are moe cost-effective to set-up and maintain

for WAN

1. WAN (Wide Area Network) - collection of a local-area networks (LANs) or other networks that communicate with one another. You can imagine WAN as a "network of networks"
2. Examples of WANs: Internet, global corporate network connecting offices worldwide, telecommunications network spanning a country.

## Network Devices

1. Routers
   - Router acts as the 'traffic director' of a network. They are responsible for directing data packets between different networks, such as LANs and WANs
   - Routers number one purpose: routing. Routers have routing tables to determine best path for data to travel
     -Todays router usually perform functionality of both routers and switches
   - Routers are used for network segmentation
   - Router perform NAT (Network Address Translation)
2. Switches
   - Switches use MAC address of a device to send data only to the port that the destination device is plugged into
   - Switches maintain mac address table to understand which devices are connected to which ports
3. Modems
   - Modem is a device that physically connect your network to your ISP's infrastructure. It establishes the initial internet connection by translating digital data from your network into a format that can be transmitted over the ISP's Network.

## Network Topologies

Network Topologies refer to the arrangement of various elements (such as links, nodes, etc.) in a computer network. It defines how different devices are connected to each other and how data is transmitted in the network.  
**Common network topologies include:**

1. Star Topology
   every nodes connects to a central network device (like a hub, switch or computer). Central network device acts as a server while peripheral devices act as clients.

   - Key Components:
     a. Central Hub (typically a network switch)
     b. Nodes (individualt devices/computers connected to the central hub)
   - Advantages:
     a. Centralized Management
     b. Easy to add another computer/device
     c. Network functions normally even if one computer on the network fails
   - Disanvantages:
     a. Higher cost to implement
     b. If the central computer /hub/switch fails, the entire network goes down

2. Bus Topology
   All devices are connected to a single communication line.

   - Key Components:
     a. Central Cable (Bus) is central cable is the backbone of the bus topology, it runs through the network connecting all devices to a single communication line.
     b. Terminators is at each end of central cable there are terminators which prevent signal reflection and ensure that data does not "bounce back" and create interface
     c. Nodes is node are dvice connected to the central bus cable.
   - Advantages:
     a. Easist network topology forconnection peripherals or computers in linear fashion
     b. It works well when there is a small network
     c. length of required cable is less than in a star topology
     d. easy to connect remove devices without afecting any other devices
     e. cost effective

   - Disadvantages:
     a. not greate for large networks
     b. Troubleshooting individualt device issues is hard
     c. if the main cable is dan=maged, the whole network fails (Terminators are required at both end of the main cable)

3. Ring Topology
   Each device is connected to two other devices, forming a circular data path.

   - Key Components:
     a. Nodes is devices such as computers, server that are connected to the ring and responsible for sending for sending and processing data
     b. Ring is circular communication pathway which is formed by connecting each node to its adjacent neighbour in a loop
     c. MAU (Multistation Access Unit) is in some implementations MAU is used to connect devices to the ring. It acts as a hub to facilitate communication between devices.
   - Advantages:
     a. data ussually flows in one direction, reducing the chance of packet collision
     b. network server is not needed
     c. data can transfer between workstations at high speeds
     d. additional workstations can be added without impacting performance of network
   - Disadvantages:
     a. all data being transfered must pass through each workstation
     b. entire network will be impacted if one workstation shut down
     c. hardware needed to connect each other worksattion is expensive

4. Mesh Topology
   Mesh topology is a network structure where each device is interconnected with every other device. This type of topology can be either full mesh or partial mesh.

   - Key Components:
     a. Nodes is device like computer, server or network peripherals which are interconnected with one another thourgh direct links.
     b. Links is Physical or logical connecetion between devices such as wired (Ethernal) or wireless (Wi-Fi) connections
   - Full Mesh Topology
     Every device in the network is connected to every other device.
     a. Advantages: High Redundancy, Reliability, Scalability
     b. Disadvantages: Cost, Complexity

   - Parial Mesh Topology
     Some devices are connected to every other device, but not all. Typically, critical devices have more connections than non-critical ones.
     a. Advantages: Cost-Effective, Improved Fault Tolerance
     b. Disadvantages: Complexity, Variable Redundancy

5. Hybrid Topology
   Combines two or more different types of topologies to form a complete network. Common hybrid Toppologies are Star-Ring Hybrid Topology, and Star-Bus Hybrid Topology

   -Key Components:
   a. Nodes is computers, servers, printer, networked peripherals that are part of the network
   b. Multiple Topologied is the primary components of hybrid topology are various network topologies that are integrated (common topologies combined include star, bus, ring and mesh).

   - Advantages:
     a. Combines benefits of different types topologies in one topology
     b. It can be modified per requirement
     c. It is flexible and reliable
     d. Error detecting and toubleshooting is easy
     e. It is used to create large networks and handles a larrge volume of traffic
   - Disadvantage
     a. Cost of implementaiton
     b. Complexity

## Client-Server vs Peer-to-Peer

1. Client-Server

   - Client - device taht is requesting a remote service or that is using remote service from a server
   - Server - device that is hosting a service to the client
   - Conclusion Client-Server is network is organized around a central server that provides resources, services or data. Clients which can be individual computers or devices, request and use those resources. Client-Server is often considered centralized.

2. Peer-to-Peer
   - Conclusion Peer-toPeer is devices (peers) in network have equal status and can act both as clients and servers. Each device can request and provided resources to other devices in the network.

## Subnetting

**Subnet** is logical subdivision of an IP Network and **Subnetting** is process of dividing a network into two or more networks. Some benefit of subnetting include: security, improving network performance.

## Common Networking Commands

1. `ifconfig` is a system administration utility in Unix-like operating systems for network interface configuration. It is used to view and change the configuration of network interfaces on a system.
2. `ping [domain]` is command for a network utility used to test the reachability of a host on an Internet Protocol (IP) network and measure the round-trip time for messages sent from the originating host to a destination computer.
3. `traceroute` is a network diagnostic tool used to track the path that packets take from one computer to another across an IP network. Here’s a detailed look at how traceroute works, its usage, and its interpretation:
4. `arp -n` is used to manipulate the ARP (Address Resolution Protocol) cache of a system. ARP is used to map IP addresses to MAC addresses, which is essential for communication within a local network
5. `nslookup [domain]` is a network administration tool used for querying the Domain Name System (DNS) to obtain domain name or IP address mapping. It can be used to find the IP address associated with a domain name, or the domain name associated with an IP address.
6. `netstat -nt` is used to display active TCP connections with numerical addresses and port numbers, rather than resolving them to hostnames and service names.
7. `route -n` is used to view and manipulate the IP routing table in Unix-like operating systems.

# Kind of Adresses

## MAC Address

1. MAC (Media Access Control) address is also known as a hardware/phydical address and it is a unique identifier assigned to a network interface controller (NIC) in a computer or networking device
2. MAC addresses are used at the data link layer (layer 2) of the OSI model. such as Ethernet or Wi-fi network.

## IP Adresses

An Internet Protocol (IP) address is a unique string of numbers separated by periods or colons that identifies each computer using the Internet Protocol to communicate over a network.

1. Types of IP Addresses

- Types of IPv4 Addresses (Internet Protocol version 4)
  IPv4 addresses are categorized based on their use and function.
  a. Private IP is devices inside your network have private IP, given by DHCP (Dynamic Host Configuration Protocol)
  b. Public IP is unique identifier for each device directly connected to the internet, your router can have a Public IP addresse but also a private IP.
  c. Static IP is Assigned permanently to a device and does not change over time.
  d. Dynamic IP Addresses is Assigned temporarily to a device from a pool of IP addresses by the Dynamic Host Configuration Protocol (DHCP)

- Types of IPv6 Addresses (Internet Protocol version 6)
  IPv6 also has different types of addresses based on their use.
  a. Unicast is Identify a single interface. Data packets sent to a unicast address are delivered to the specific node.
  c. Multicast is Identify multiple interfaces. Packets sent to a multicast address are delivered to all interfaces identified by that address.
  d. Anycast is Assigned to multiple interfaces. Packets sent to an anycast address are delivered to the nearest interface identified by the address.

2. Importance of IP Addresses
   - Routing: IP addresses are essential for routing data packets between devices on different networks.
   - Identification: Allow devices to identify and communicate with each other over a network.
   - Security: Help in implementing security policies and tracking devices on a network.